import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { Link } from 'react-router-dom';
import Footer from '../components/Display/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { deleteItem_OCIT_DATA_HOCPHAN, removeAccents } from '../utils/firebaseFunctions';
import { deleteItem_Blog } from '../Firebase/Blog';

import Swal from 'sweetalert2';
import { title } from '@uiw/react-md-editor';

function ContentManagementPage() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    const [articlesBlog, setArticlesBlog] = useState([]);
    const [articlesOrder, setArticlesOrder] = useState([]);
    const [articlesDataHocPhan, setArticlesDataHocPhan] = useState([]);
    useEffect(() => {
        const articleRef = collection(db, 'Blog');
        const q = query(articleRef, orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticlesBlog(articles);
        });
    }, []);
    const blogdb = articlesBlog.filter((item) => {
        return item.createrID === user.uid;
    });

    useEffect(() => {
        const articleRef = collection(db, 'ORDER');
        const q = query(articleRef, orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticlesOrder(articles);
        });
    }, []);
    const Orderdb = articlesOrder.filter((item) => {
        return item.google_id === user.uid;
    });

    useEffect(() => {
        const articleRef = collection(db, 'OCIT_DATA_HOCPHAN');
        const q = query(articleRef, orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticlesDataHocPhan(articles);
        });
    }, []);
    const DataHocPhandb = articlesDataHocPhan.filter((item) => {
        return item.createrID === user.uid;
    });
    function handlerDeleteItemBlog(id) {
        deleteItem_Blog(id);
        setTimeout(() => {
            window.location = '/';
        }, 1500);
    }
    function deleteItem_DataHocPhan(id) {
        Swal.fire({
            title: 'Bạn Chắc Chắn Muốn Xoá Chứ',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                deleteItem_OCIT_DATA_HOCPHAN(id);
                setTimeout(() => {
                    window.location = '/data/hocphan';
                }, 1500);
            }
        });
    }
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border-b-gray-700"
            >
                <h2 className="md:text-3xl text-xl text-red-500 my-2">Các Blog Của Bạn</h2>
                <div className="w-full">
                    {blogdb.map((item) => {
                        return (
                            <div className="block justify-start items-start w-full rounded-md bg-slate-400">
                                <Link to={`/blog/post/${item.id}`}>
                                    <div class="flex flex-col justify-start ">
                                        <div
                                            class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 
                                        border border-white bg-white"
                                        >
                                            <div class="w-full bg-white flex flex-col space-y-2 ">
                                                <div class="flex justify-between item-center">
                                                    <p class="text-gray-500 font-medium block">{item?.createdBy}</p>
                                                    <div class="flex ">
                                                        <div class="bg-gray-200  hover:bg-blue-500 px-3 py-1 rounded-full text-xs font-medium text-gray-800 block mr-2">
                                                            <span onClick={(e) => handlerDeleteItemBlog(item.id)}>
                                                                Delete
                                                            </span>
                                                        </div>
                                                        <div class="bg-gray-200 hover:bg-blue-500 px-3 py-1 rounded-full text-xs font-medium text-gray-800 block">
                                                            <Link to={`/publish/update/${item.id}/${item.makeCode}`}>
                                                                <span>Update</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 class="font-black text-gray-800 md:text-xl text-xl">
                                                    {item.title.substring(0, 70) + '...'}
                                                </h3>
                                                <p class="text-sm text-gray-500 ">
                                                    {item.description.substring(0, 160) + '...'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="w-full h-[2px] bg-slate-500 "></div>
                <h2 className="md:text-3xl text-xl text-red-500 my-2 mb-10">Các Bài Học Bạn Đã Thêm</h2>
                <div className=" ">
                    {DataHocPhandb.map((item) => {
                        return (
                            <div className="-mt-14">
                                <div class="flex  items-start justify-center px-6 py-8 w-full">
                                    <div id="popover" class="transition duration-150 ease-in-out  w-full">
                                        <div class="w-full bg-white rounded shadow-2xl">
                                            <div class="w-full h-full px-4 xl:px-8 pt-3 pb-5">
                                                <div class="flex justify-between items-center">
                                                    <div class="flex items-center justify-center">
                                                        <div>
                                                            <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
                                                                {item.title.substring(0, 50) + '...'}
                                                            </h3>
                                                            <p class="text-gray-600 text-xs leading-3"> {item.tag}</p>
                                                        </div>
                                                    </div>
                                                    <div class="relative font-normal text-xs sm:text-sm flex items-center text-gray-600">
                                                        <Link
                                                            to={`/data/hocphan/${item.tag}/${removeAccents(
                                                                item.title,
                                                            )}/${item.id}`}
                                                        >
                                                            <span className="border rounded-lg bg-indigo-400 text-white px-2 mx-2 shadow-xl">
                                                                Can view
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            to={`/data/markdown/hocphan/update/${item.id}/${item?.makeCode}`}
                                                        >
                                                            <span className="border rounded-lg bg-indigo-600 text-white px-2 mx-2 shadow-xl">
                                                                Update
                                                            </span>
                                                        </Link>
                                                        <span
                                                            className="border rounded-lg bg-indigo-900 text-white px-2 mx-2 shadow-xl"
                                                            onClick={(e) => deleteItem_DataHocPhan(item.id)}
                                                        >
                                                            <span>Delete</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

export default ContentManagementPage;
