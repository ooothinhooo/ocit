import { collection, onSnapshot, orderBy, query, Timestamp, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

// No import is required in the WebPack.
// import '@uiw/react-md-editor/dist/markdown-editor.css';
// import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { removeAccents } from '../../../utils/firebaseFunctions';
import { storage, db, auth } from '../../../firebase.config';
import { useStateValue } from '../../../context/StateProvider';
import { useAuthState } from 'react-firebase-hooks/auth';

function ViewHocPhan() {
    let { id } = useParams();
    let { filter } = useParams();
    let { title } = useParams();
    const [articles, setArticles] = useState([]);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, 'OCIT_DATA_HOCPHAN');
        const q = query(articleRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    console.log(articles);
    const arr = articles?.filter((item) => {
        return item?.id === id;
    });
    console.log(arr[0]?.title);
    return (
        <div className="-mt-6">
            <nav class="flex mb-2" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a
                            href="#"
                            class="inline-flex items-center text-sm font-medium text-gray-300 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <Link to="/data/hocphan">
                            <div class="flex items-center">
                                <svg
                                    class="w-6 h-6 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <a
                                    href="#"
                                    class="ml-1 text-sm font-medium text-gray-300 hover:text-blue-700 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Học Phần
                                </a>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg
                                class="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <a
                                href="#"
                                class="ml-1 text-sm font-medium text-gray-300 hover:text-blue-700 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                            >
                                {filter}
                            </a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg
                                class="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-blue-700 md:ml-2 dark:text-gray-400">
                                {arr[0]?.title}
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>

            <MDEditor.Markdown
                style={{ padding: 15 }}
                source={arr[0]?.description}
                linkTarget="_blank"

                // previewOptions={{
                //   linkTarget: "_blank"
                // }}
            />
        </div>
    );
}

export default ViewHocPhan;
