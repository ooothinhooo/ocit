import { collection, onSnapshot, orderBy, query, Timestamp, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { storage, db, auth } from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useViewportScroll, useTransform } from 'framer-motion';

function Blog() {
    const [articles, setArticles] = useState([]);
    // console.log(articles);
    const [userAuthState] = useAuthState(auth);

    useEffect(() => {
        const articleRef = collection(db, 'Blog');
        const q = query(articleRef, orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    // console.log(articles);
    // articles.map((item) => console.log(item));
    return (
        <div className="md:grid md:grid-cols-3 md:gap-3">
            {articles.map((item) => {
                return (
                    <Link to={`/blog/post/${item.id}`}>
                        <div className="">
                            <motion.div
                                whileHover={{
                                    scale: 0.96,
                                    rotate: 1,
                                }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -10,
                                    borderRadius: '100%',
                                }}
                                class={`max-w-md py-4 px-8 bg-white hover:bg-[#EEF1FF]
                                 hover:text-primary shadow-lg rounded-lg my-20 
                                    transition-transform ease-in-out 
                            `}
                            >
                                <div
                                    class="flex items-center  justify-center md:justify-end 
                                hover:justify-start -mt-16"
                                >
                                    <img
                                        class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
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
                            </motion.div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Blog;
