import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { AnimatePresence, motion } from 'framer-motion';
import { MdCloudUpload, MdDelete, MdFastfood } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
import { BsCodeSquare, BsFileEarmarkPdf } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { categories } from '../../../utils/data';
import Loader from '../../Loader';
import { storage } from '../../../firebase.config';
import {
    saveItem,
    getAllOCIT,
    updateItem,
    pushArr,
    deleteItemBtn,
    makeid,
    removeAccents,
} from '../../../utils/firebaseFunctions';
import { useStateValue } from '../../../context/StateProvider';
import { actionType } from '../../../context/reducer';

import RowContainer from '../../RowContainer';
import Banner from '../../Banner';
function UpdateProduct({ id }) {
    var today = new Date();
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');
    const [price, setPrice] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');

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

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];

        const storageRef = ref(
            storage,
            `app/ocit/Images/${category.split(' ').join('')}/${makeid(5).toUpperCase()}-${removeAccents(imageFile.name)
                .split('')
                .join('')
                .toUpperCase()}`,
        );

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
    const saveDetails = (index) => {
        setIsLoading(true);
        try {
            const data = {
                id: `${category.split(' ').join('').toUpperCase()}${removeAccents(title)
                    .split(' ')
                    .join('')
                    .toUpperCase()}${price}${code.split(' ').join('').toUpperCase()}}`,
                title: title,
                imageURL: imagesAssets,
                category: category,
                calories: calories,
                qty: 1,
                price: price,
                description: description,
                code: code.toUpperCase(),
                date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
            };
            updateItem(subPath, data);

            // try {
            //     deleteItemBtn(subPath);
            //     // window.location.reload();
            // } catch (e) {
            //     console.error(e);
            // }
            setIsLoading(false);
            setFields(true);
            setMsg('Data Uploaded successfully');
            clearData();
            setAlertStatus('success');
            setTimeout(() => {
                setFields(false);
                window.location = '/';
                // window.location.reload();
            }, 4000);
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
    const Product = OCIT?.filter((n) => n.id == subPath);
    const ProductItem = Product[0];
    console.log(ProductItem);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full  items-center justify-center  py-3 grid gap-4 grid-cols-2 bg-primary  "
            >
                <div className="items-center justify-center flex-col -mt-20 ">
                    <RowContainer flag={false} data={OCIT?.filter((n) => n.id == subPath)} />
                    <div className="w-full flex items-center flex-wrap justify-center">
                        <div
                            className="w-200 h-250 min-h-[180px] min-w[200px]
                        md:w-340  md:min-w-[240px] 
                        md:h-auto bg-gray-100 p-2 m-2
                        flex flex-col items-center justify-between
                        drop-shadow-xl hover:drop-shadow-xl rounded-lg"
                        >
                            <div className="w-full flex items-center justify-between ">
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="md:w-40 md:h-40 w-20 h-20 drop-shadow-2xl"
                                >
                                    <img src={imagesAssets} alt="" className="w-full h-full object-contain" />
                                </motion.div>

                                <motion.div
                                    whichTap={{ scale: 0.75 }}
                                    className="w-8 h-8 rounded-full  bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                                    // onClick={() => setItems([...cartItems, item])}
                                >
                                    <MdShoppingBasket className="text-textRed" />
                                </motion.div>
                            </div>
                            <div className="w-full flex flex-col items-end justify-end  -mt-8 ">
                                <p className="  text-gray-500 text-sm">{category}</p>
                                <p className="text-textColor font-semibold text-sm md:text-lg">{title}</p>
                                <p className="mt-1 text-sm text-gray-500 ">{calories}</p>
                                <div className="flex justify-center items-center  text-md flex-row ">
                                    <p className=" text-headingColor font-semibold">
                                        <span className="  text-red-500 ">{price}K</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full mr-2  border border-gray-300 rounded-lg   p-4 flex flex-col items-center justify-center">
                    <div>
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
                        {/* <textarea
                            id="message"
                            rows="6"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="block bg-primary text-white p-2.5 w-full text-sm  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                        ></textarea> */}
                        <MDEditor
                            className="w-full bg-primary"
                            height={400}
                            value={description}
                            // onChange={(e) => setValue(e.target.value)}
                            onChange={setDescription}
                        />
                        <div className="w-full flex flex-col md:flex-row items-center gap-3 ">
                            <div className="w-full">
                                <select
                                    className="outline-none w-full text-base border-b-2 bg-primary text-red-400 border-gray-200 p-2 rounded-md cursor-pointer"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="orther" className="bg-primary text-red-400 ">
                                        Select category
                                    </option>
                                    {categories &&
                                        categories.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.urlParamName}
                                                className="text-base border-0 outline-none capitalize bg-primary text-red-400  "
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="w-full py-2 border-b border-gray-700 flex items-center gap-2">
                                <BsFileEarmarkPdf className="text-textRed text-2xl" />
                                <input
                                    type="text"
                                    value={calories}
                                    onChange={(e) => setCalories(e.target.value)}
                                    required
                                    placeholder="Loại Tài Liệu"
                                    className="w-full h-full text-lg bg-transparent text-white outline-none border-none placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                        <div
                            className=" w-full h-225 md:h-250 group flex justify-center items-center flex-col border-2 border-dotted border-gray-300
                      cursor-pointer rounded-lg"
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
                        </div>{' '}
                        <div className="w-full flex flex-col md:flex-row items-center gap-3 ">
                            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                <GrMoney className="text-textRed text-2xl" />
                                <input
                                    type="text"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                    placeholder="Price"
                                    className="w-full h-full text-lg   text-white bg-transparent outline-none border-none placeholder:text-gray-400"
                                />
                            </div>
                            <div className="w-full py-2 border-b  border-gray-300 flex items-center gap-2">
                                <BsCodeSquare className="text-textRed text-2xl" />
                                <input
                                    type="text"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    placeholder="Code"
                                    className="w-full h-full text-xl text-white bg-transparent outline-none border-none placeholder:text-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex items-center w-full mt-4">
                            <button
                                type="button"
                                className="ml-0 md:ml-auto w-full  md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                                onClick={saveDetails}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* <Banner /> */}
        </AnimatePresence>
    );
}

export default UpdateProduct;
