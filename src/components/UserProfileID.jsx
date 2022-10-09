import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { Link, useParams } from 'react-router-dom';
import Footer from './Display/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { deleteItem_Blog, deleteItem_OCIT_DATA_HOCPHAN, removeAccents } from '../utils/firebaseFunctions';
import Swal from 'sweetalert2';
import { title } from '@uiw/react-md-editor';

function UserProfile() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    let { id } = useParams();
    let { name } = useParams();

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
        return item.createrID === id;
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
        return item.google_id === id;
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
        return item.createrID === id;
    });
    // console.log(DataHocPhandb);
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
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: 'rgba(255, 255, 255, 0)',
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: 'rgba(0, 0, 0)',
        },
    };
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border-b-gray-700"
            >
                <div class="w-full rounded-3xl overflow-hidden shadow-xl  my-3 bg-blue-500">
                    {/* <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" /> */}
                    <div class="bg-white rounded-xl p-4 shadow-xl">
                        <div class="flex flex-col justify-center items-center">
                            <div class="w-32 h-32 rounded-full bg-gray-300 border-2 border-white mt-2">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxhAxJ4D7MOeTTj6kR9PBeZonW5HM7giKjTbEmR-HMBwf3G1VqGnlwpO1kWrdyIZu8_U&usqp=CAU"
                                    class="rounded-full  w-full"
                                />
                            </div>
                            <p class="font-semibold text-xl text-blue-600 mt-1">{name}</p>
                            <p class="font-semibold text-base text-gray-400">Hello, i'm from another the other side!</p>

                            <div class="py-5 m-auto items-center justify-center ">
                                <main class="h-full overflow-y-auto m-auto items-center justify-center">
                                    <div class="  m-auto  items-center justify-center">
                                        <div class="flex m-auto justify-center items-center mx-4">
                                            <div class="flex items-center justify-center p-4 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800 mx-2">
                                                <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                                    <motion.svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <motion.path
                                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                                            variants={icon}
                                                            initial="hidden"
                                                            animate="visible"
                                                            transition={{
                                                                default: { duration: 2, ease: 'easeInOut' },
                                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                                                            }}
                                                        ></motion.path>
                                                    </motion.svg>
                                                </div>
                                                <div>
                                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                        My Blog Posts
                                                    </p>
                                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                        <h2>{blogdb?.length}</h2>
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="flex items-center p-4 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800 mx-2">
                                                <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                        Học Phần
                                                    </p>
                                                    <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                        <h2>{DataHocPhandb?.length}</h2>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="md:text-3xl text-xl text-red-500 my-2">
                    Các Blog Của <span className="text-blue-700">{name}</span>
                </h2>
                <div className="md:grid md:grid-cols-3 md:gap-3">
                    {blogdb.map((item) => {
                        return (
                            <Link to={`/blog/post/${item.id}`}>
                                <div className="">
                                    <div
                                        class={` m-auto justify-center items-center max-w-md py-4 px-8
                                         bg-white shadow-lg rounded-lg my-20 
                                         transition-transform ease-in-out
                                        `}
                                    >
                                        <div class="flex items-center justify-center md:justify-start -mt-16">
                                            <img
                                                class="w-20 h-20 ml-6 object-cover rounded-full border-2 border-indigo-500"
                                                src={item.PhoToCreater}
                                            />
                                        </div>
                                        <div>
                                            <h2 class="text-gray-800 text-xl font-semibold">
                                                {item.title.substring(0, 50) + '...'}
                                            </h2>
                                            <p class="mt-2 text-gray-600 text-sm">
                                                {item.description.substring(0, 100) + '...'}
                                            </p>
                                        </div>
                                        {/* <div class="flex justify-end mt-4">
                                <a href="#" class="text-xl font-medium text-indigo-500">
                                    John Doe
                                </a>
                            </div> */}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="w-full h-[2px] bg-slate-500 "></div>
                <h2 className="md:text-3xl text-xl text-red-500 my-2">
                    Các Bài Học <span className="text-blue-700">{name}</span> Đã Thêm
                </h2>
                <div className="md:grid md:grid-cols-3 md:gap-3 ">
                    {DataHocPhandb.map((item) => {
                        return (
                            <Link to={`/data/hocphan/${item.tag}/${removeAccents(item.title)}/${item.id}`}>
                                <div className="">
                                    <div
                                        class={`m-auto justify-center items-center max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 
                                        
                                        `}
                                    >
                                        <div class="flex items-center justify-center md:justify-start -mt-16">
                                            <img
                                                class="w-20 h-20 ml-6 object-cover rounded-full border-2 border-indigo-500"
                                                src={item.PhoToCreater}
                                            />
                                            <span className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                                                {item.tag}
                                            </span>
                                        </div>
                                        <div>
                                            <h2 class="text-gray-800 text-xl font-semibold">
                                                {item.title.substring(0, 50) + '...'}
                                            </h2>
                                            <p class="mt-2 text-gray-600 text-sm">
                                                {item.description.substring(0, 66) + '...'}
                                            </p>
                                        </div>
                                        {/* <div class="flex justify-end mt-4">
                                <a href="#" class="text-xl font-medium text-indigo-500">
                                    John Doe
                                </a>
                            </div> */}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

export default UserProfile;
