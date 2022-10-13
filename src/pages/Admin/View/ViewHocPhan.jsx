import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Link, useParams } from 'react-router-dom';
import { AddArticle, Articles } from '../../../components';
import { db } from '../../../firebase.config';


function ViewHocPhan() {
    let { id } = useParams();
    let { filter } = useParams();
    // let { title } = useParams();
    const [articles, setArticles] = useState([]);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, 'OCIT_DATA_HOCPHAN');
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
    const arr = articles?.filter((item) => {
        return item?.id === id;
    });
    // console.log(arr[0]);

    const CMT_DB = 'CMT_VIEW_HOCPHAN' + '/' + filter + '/' + id;
    return (
        <div className="-mt-6">
            <nav class="flex mb-2" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li>
                        <Link to="/">
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
                                    Home
                                </a>
                            </div>
                        </Link>
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
                                    {filter}
                                </a>
                            </div>
                        </Link>
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

            <div class="mt-2 left-0">
                <div
                    class="bg-white px-2 py-2 rounded-lg shadow hover:shadow-xl
                 max-w-sm  transform hover:-translate-y-[0.125rem] 
                 transition duration-100 ease-linear"
                >
                    <div class="w-full ">
                        <span class="font-medium text-sm text-slate-400">Người Đăng Tải</span>
                        {/* <button class="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
                            <svg class="h-2 w-2 fill-current items-center" viewBox="0 0 20 20">
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button> */}
                    </div>
                    <Link to={`/profile/id/${arr[0]?.createrID}/${arr[0]?.createdBy}`}>
                        <div class="flex items-center  rounded-lg px-1 py-1 cursor-pointer hover:bg-slate-300">
                            <div class="relative flex flex-shrink-0 items-end ">
                                <img class="h-10 w-10 rounded-full" src={arr[0]?.PhoToCreater} />
                                <span class="absolute h-[10px] w-[10px] bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                            </div>

                            <div class="ml-3 ">
                                <p class="font-semibold tracking-tight text-xs">{arr[0]?.createdBy}</p>

                                <p class="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
                                    Update {arr[0]?.date}
                                </p>
                            </div>
                        </div>{' '}
                    </Link>
                </div>
            </div>
            <div className="mt-12">
                <AddArticle colDB={CMT_DB} />
                <div className="h-full">
                    <Articles colDB={CMT_DB} />
                </div>
            </div>
        </div>
    );
}

export default ViewHocPhan;
