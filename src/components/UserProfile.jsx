import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { Link } from 'react-router-dom';
import Footer from './Display/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { deleteItem_Blog } from '../utils/firebaseFunctions';
function UserProfile() {
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [articlesBlog, setArticlesBlog] = useState([]);
    const [articlesOrder, setArticlesOrder] = useState([]);
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

    function handlerDeleteItem(id) {
        deleteItem_Blog(id);
        setTimeout(() => {
            window.location = '/';
        }, 1500);
    }
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
                    <div class="flex justify-center mt-8">
                        <img
                            src={user.photoURL}
                            class="rounded-full border-solid border-white border-2 -mt-3 h-16 w-16"
                        />
                    </div>
                    <div class="text-center px-3 pb-6 pt-2">
                        <h3 class="text-white text-sm bold font-sans">{user.displayName}</h3>
                        <h4 class="text-white text-sm bold font-sans">{user.email}</h4>
                        <p class="mt-2 font-sans font-light text-white">Hello, i'm from another the other side!</p>
                    </div>
                    <div class="flex justify-center pb-3 text-white">
                        <div class="text-center mr-3 border-r pr-3">
                            <h2>{blogdb?.length}</h2>
                            <span>Blog</span>
                        </div>
                        <div class="text-center">
                            <h2>{Orderdb?.length}</h2>
                            <span>Order Product</span>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-3">
                    {blogdb.map((item) => {
                        return (
                            <Link to={`/blog/post/${item.id}`}>
                                <div className="">
                                    <div
                                        class={` max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 
                                        
                                        `}
                                    >
                                        <div class="flex items-center justify-center md:justify-start -mt-16">
                                            <span
                                                onClick={(e) => handlerDeleteItem(item.id)}
                                                className="border rounded-lg bg-indigo-900 text-white px-2 mx-2 shadow-xl"
                                            >
                                                Delete
                                            </span>
                                            <Link to={`/publish/update/${item.id}/${item.makeCode}`}>
                                                <span className="border rounded-lg bg-indigo-900 text-white px-2 mx-2 shadow-xl">
                                                    Update
                                                </span>
                                            </Link>
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
                <Footer />
            </motion.div>
        </AnimatePresence>
    );
}

export default UserProfile;
