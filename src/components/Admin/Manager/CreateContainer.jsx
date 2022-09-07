import React, { useState } from 'react';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { AnimatePresence, motion } from 'framer-motion';
import { MdCloudUpload, MdDelete, MdFastfood } from 'react-icons/md';
import { BsCodeSquare, BsFileEarmarkPdf } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { categories } from '../../../utils/data';
import Loader from '../../Loader';
import { storage } from '../../../firebase.config';
import { saveItem, getAllOCIT, makeid, removeAccents } from '../../../utils/firebaseFunctions';
import { useStateValue } from '../../../context/StateProvider';
import { actionType } from '../../../context/reducer';

function CreateContainer() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [calories, setCalories] = useState('');
    const [price, setPrice] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState(null);
    const [imagesAssets, setImagesAssets] = useState(null);
    const [fields, setFields] = useState(true);
    const [alertStatus, setAlertStatus] = useState('danger');
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [{ OCIT }, dispatch] = useStateValue();
    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        // console.log(imageFile);
        const storageRef = ref(
            storage,
            `app/ocit/Images/${category}/${category}-${code.split(' ').join('').toUpperCase()}/${makeid(
                5,
            ).toUpperCase()}-${removeAccents(imageFile.name).split('').join('').toUpperCase()}`,
        );
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
                    id: `${category.split(' ').join('').toUpperCase()}${removeAccents(title)
                        .split(' ')
                        .join('')
                        .toUpperCase()}${price}${code.split(' ').join('').toUpperCase()}`,
                    title: title,
                    imageURL: imagesAssets,
                    category: category,
                    calories: calories,
                    description: description,
                    qty: 1,
                    price: price,
                    code: code.toUpperCase(),
                };
                saveItem(data);
                setIsLoading(false);
                setFields(true);
                setMsg(`Data Uploaded ${title.toUpperCase()} successfully`);
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
        <AnimatePresence>
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
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center md:py-14 md:mt-4  bg-primary"
            >
                <div className="w-[90%] md:w-[50%] mr-2  border border-gray-300 rounded-lg  gap-4 p-4 flex flex-col items-center justify-center">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFastfood className="text-xl text-textRed" />
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

                    {/* <input
                        type="text"
                        id="message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        class="block p-2.5 h-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Description ..."
                    ></input> */}

                    <div className="w-full py-2 border-b border-gray-700 flex items-center gap-2">
                        <BsFileEarmarkPdf className="text-textRed text-2xl" />
                        <input
                            type="text"
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            required
                            placeholder="Loại Tài Liệu"
                            rows="4"
                            className="w-full h-full text-xl bg-transparent outline-none border-none text-white placeholder:text-gray-400"
                        />
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center gap-3 text-white">
                        <div className="w-full py-2 border-b  border-gray-300 flex items-center gap-2">
                            <GiMoneyStack className="text-textRed text-2xl" />
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                placeholder="Price"
                                className="w-full h-full text-xl bg-transparent outline-none border-none placeholder:text-gray-400"
                            />
                        </div>{' '}
                        <div className="w-full py-2 border-b  border-gray-300 flex items-center gap-2">
                            <BsCodeSquare className="text-textRed text-2xl" />
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                required
                                placeholder="Code"
                                className="w-full h-full text-xl bg-transparent outline-none border-none placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                    <div
                        className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300
                     w-full h-225 md:h-300 cursor-pointer rounded-lg"
                    >
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
                </div>
                <div className="w-[90%] md:w-[40%]  border border-gray-300 rounded-lg  gap-4 p-4 flex flex-col items-center justify-center">
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

                    <textarea
                        id="message"
                        rows="22"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message..."
                    ></textarea>
                </div>
            </motion.div>
            <div className="flex items-center w-full">
                <button
                    type="button"
                    className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                    onClick={saveDetails}
                >
                    Save
                </button>
            </div>
        </AnimatePresence>
    );
}

export default CreateContainer;
