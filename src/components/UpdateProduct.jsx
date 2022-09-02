import React, { useState } from 'react';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { motion } from 'framer-motion';
import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from './Loader';
import { storage } from '../firebase.config';
import { saveItem, getAllOCIT, updateItem } from '../utils/firebaseFunctions';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

import RowContainer from './RowContainer';
function UpdateProduct({ id }) {
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(null);
    const [imagesAssets, setImagesAssets] = useState(null);
    const [fields, setFields] = useState(true);
    const [alertStatus, setAlertStatus] = useState('danger');
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [{ OCIT }, dispatch] = useStateValue();
    // console.log(window.location.pathname);
    const pathName = window.location.pathname;
    const subPath = pathName.slice(8);
    // console.log(subPath); data={OCIT?.filter((n) => n.category == filter)}

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        // console.log(imageFile);
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
        // const storageRef = ref(storage, `app/oci/${category}/${Date.now()}-${imageFile.name}`);
        // const storageRef = ref(storage, `Images/${Data.now()} - ${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                setFields(true);
                setMsg('Error while uploading : Try again later');
                setAlertStatus('danger');
                setTimeout(() => {
                    setFields(false);
                    setIsLoading(false);
                }, 4000);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImagesAssets(downloadURL);
                    setIsLoading(false);
                    setFields(true);
                    setMsg('Image uploaded successfully');
                    setAlertStatus('success');
                    setTimeout(() => {
                        setFields(false);
                    }, 4000);
                });
            },
        );
    };

    const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage, imagesAssets);
        deleteObject(deleteRef).then(() => {
            setImagesAssets(null);
            setIsLoading(false);
            setFields(true);
            setMsg('Image deleted successfully');
            setAlertStatus('success');
            setTimeout(() => {
                setFields(false);
            }, 4000);
        });
    };
    const saveDetails = () => {
        setIsLoading(true);
        try {
            if (!title || !calories || !imagesAssets || !price || !category) {
                setFields(true);
                setMsg("Required fields can't be empty");
                setAlertStatus('danger');
                setTimeout(() => {
                    setFields(false);
                    setIsLoading(false);
                }, 4000);
            } else {
                const data = {
                    id: subPath,
                    title: title,
                    imageURL: imagesAssets,
                    category: category,
                    calories: calories,
                    qty: 1,
                    price: price,
                };
                updateItem(subPath, data);
                setIsLoading(false);
                setFields(true);
                setMsg('Data Uploaded successfully');
                clearData();
                setAlertStatus('success');
                setTimeout(() => {
                    setFields(false);
                }, 4000);
            }
        } catch (e) {
            setFields(true);
            setMsg('Error while uploading : Try again later');
            setAlertStatus('danger');
            setTimeout(() => {
                setFields(false);
                setIsLoading(false);
            }, 4000);

            fetchData();
        }
    };

    const clearData = () => {
        setTitle('');
        setImagesAssets('');
        setPrice('40');
        setCalories('Báo Cáo - PDF');
    };

    const fetchData = async () => {
        await getAllOCIT().then((data) => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                OCIT: data,
            });
        });
    };
    return (
        <div className="w-full h-screen flex flex-row ">
            <RowContainer flag={false} data={OCIT?.filter((n) => n.id == subPath)} />
            <div className="w-full h-screen flex items-center justify-center">
                <div
                    className="w-[80%] md:w-[100%] md:h-[90%] border
                 border-gray-300 rounded-lg  gap-4 p-4 flex flex-col items-center justify-center"
                >
                    {!fields && (
                        <motion.p
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                                alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'
                            }`}
                        >
                            {msg}
                        </motion.p>
                    )}
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFastfood className="text-xl text-gray-700" />
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Give me a title ..."
                            className="w-full h-full text-lg bg-transparent font-semibold
                        outline-none border-none placeholder:text-gray-400 text-white"
                        />
                    </div>
                    <div className="w-full">
                        <select
                            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="orther" className="bg-white">
                                Select category
                            </option>
                            {categories &&
                                categories.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.urlParamName}
                                        className="text-base border-0 outline-none capitalize bg-white text-headingColor "
                                    >
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <>
                                {!imagesAssets ? (
                                    <>
                                        <label className="w-full h-full flex flex-col items-center justify-center cursor-poiter">
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                                <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                                <p className="text-gray-500 hover:text-gray-700">
                                                    Click here to upload
                                                </p>
                                            </div>
                                            <input
                                                type="file"
                                                name="upload-image"
                                                accept="image/*"
                                                onChange={uploadImage}
                                                className="w-0 h-0"
                                            />
                                        </label>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative h-full">
                                            <img className="w-full h-full object-cover" src={imagesAssets} />
                                            <button
                                                type="button"
                                                className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                                                onClick={deleteImage}
                                            >
                                                <MdDelete className="text-white" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center gap-3 ">
                        <div className="w-full py-2 border-b border-gray-700 flex items-center gap-2">
                            <MdFoodBank className="text-gray-700 text-2xl" />
                            <input
                                type="text"
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                required
                                placeholder="Calories"
                                className="w-full h-full text-lg bg-transparent  text-white
                                outline-none border-none placeholder:text-gray-400"
                            />
                        </div>{' '}
                        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                            <MdAttachMoney className="text-gray-700 text-2xl" />
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                placeholder="Price"
                                className="w-full h-full text-lg bg-transparent text-white outline-none border-none placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-full">
                        <button
                            type="button"
                            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                            onClick={saveDetails}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
