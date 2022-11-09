import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { collection, onSnapshot, orderBy, query,arrayRemove, arrayUnion, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { auth, db, storage } from '../firebase.config';
import { toast } from 'react-toastify';

import { useStateValue } from '../context/StateProvider';
import Footer from '../components/Display/Footer';
import { deleteItem_OCIT_DATA_HOCPHAN, removeAccents } from '../utils/firebaseFunctions';
import { deleteItem_Blog } from '../Firebase/Blog';
import { FaLockOpen, FaLock } from 'react-icons/fa';
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
        // const articleRef = collection(db, 'OCIT_DATA_HOCPHAN');
        const articleRef = collection(db, 'OCIT_Term');

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
    function deleteFunc(colDB, id) {
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
                // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                // deleteItem_OCIT_DATA_HOCPHAN(id);
                handleDelete(colDB, id);
            }
        });
    }

    const handleView = (view, id, colDB) => {
        const likesRef = doc(db, colDB, id);
        if (view) {
            updateDoc(likesRef, {
                view: false,
            })
                .then(() => {
                    // console.log('unliked');
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(likesRef, {
                view: true,
            })
                .then(() => {
                    // console.log('liked');
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    const handleDelete = async (colDB, id) => {
        if (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500,
            })
        ) {
            try {
                // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                await deleteDoc(doc(db, colDB, id));
                const storageRef = ref(storage, id);
                await deleteObject(storageRef);
            } catch (error) {
                toast('Error deleting article', { type: 'error' });
                console.log(error);
            }
        }
    };
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
                            <div className="block justify-start items-start w-full  my-1">
                                <div class="md:flex md:flex-col justify-start ">
                                    <div
                                        class="relative md:flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 
                                        border border-white bg-white"
                                    >
                                        <div class="w-full bg-white block md:flex md:flex-col space-y-2 ">
                                            <div class="md:flex md:justify-between justify-center item-center">
                                                {/* <p class="text-gray-500 font-medium block">{item?.createdBy}</p> */}
                                                <h3 class="font-black text-gray-800 md:text-xl text-xl">
                                                    {item.title.substring(0, 70) + '...'}
                                                </h3>
                                                <div class="flex ">
                                                    <div class="bg-gray-200 hover:bg-blue-500 px-3 py-1 mx-2 rounded-full text-xs font-medium text-gray-800 block">
                                                        <Link to={`/blog/post/${item.id}`}>
                                                            <span>View</span>
                                                        </Link>
                                                    </div>

                                                    <span
                                                        //  onClick={(e) => setView(!view)}
                                                        onClick={(e) => handleView(item.view, item.id, 'Blog')}
                                                        className="text-xl p-1 mx-2 "
                                                    >
                                                        {!item?.view ? (
                                                            <>
                                                                <FaLock className="text-blue-700" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <FaLockOpen className="text-green-500" />
                                                            </>
                                                        )}
                                                    </span>
                                                    <div class="bg-gray-200  hover:bg-blue-500 px-3 py-1 rounded-full text-xs font-medium text-gray-800 block mx-2">
                                                        <span
                                                            onClick={(e) => deleteFunc('Blog', item.id)}
                                                            // onClick={(e) => handleDelete('Blog', item.id)}
                                                        >
                                                            Delete
                                                        </span>
                                                    </div>
                                                    <div class="bg-gray-200 hover:bg-blue-500 px-3 py-1 mx-2 rounded-full text-xs font-medium text-gray-800 block">
                                                        <Link to={`/publish/update/${item.id}/${item.makeCode}`}>
                                                            <span>Update</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="text-sm text-gray-500 ">
                                                {item.description.substring(0, 160) + '...'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                            <div class="w-full h-full px-4 xl:px-8 md:pt-3 md:pb-5 py-2">
                                                <div class="md:flex justify-between items-center">
                                                    <div class="flex items-center justify-start">
                                                        <div>
                                                            <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
                                                                {item.title.substring(0, 50) + '...'}
                                                            </h3>
                                                            <p class="text-gray-600 text-xs leading-3"> {item.tag}</p>
                                                        </div>
                                                    </div>
                                                    <div class="relative font-normal text-xs sm:text-sm flex items-center text-gray-600">
                                                        <span
                                                            onClick={(e) =>
                                                                handleView(item.view, item.id, 'OCIT_DATA_HOCPHAN')
                                                            }
                                                            className="md:text-4xl text-2xl p-1 mr-1 "
                                                        >
                                                            {!item?.view ? (
                                                                <>
                                                                    <FaLock className="text-blue-700" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <FaLockOpen className="text-green-500" />
                                                                </>
                                                            )}
                                                        </span>
                                                        <Link
                                                            to={`/data/hocphan/${item.tag}/${removeAccents(
                                                                item.title,
                                                            )}/${item.id}`}
                                                        >
                                                            <span className="border rounded-lg bg-indigo-400 text-white px-2 mx-2 shadow-xl">
                                                                view
                                                            </span>
                                                        </Link>
                                                        <Link to={`/data/markdown/hocphan/update/${item.id}`}>
                                                            <span className="border rounded-lg bg-indigo-600 text-white px-2 mx-2 shadow-xl">
                                                                Update
                                                            </span>
                                                        </Link>
                                                        <span
                                                            className="border rounded-lg bg-indigo-900 text-white px-2 mx-2 shadow-xl cursor-pointer hover:bg-green-600"
                                                            onClick={(e) => deleteFunc('OCIT_Term', item.id)}
                                                            // onClick={(e) => handleDelete('OCIT_DATA_HOCPHAN', item.id)}
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
