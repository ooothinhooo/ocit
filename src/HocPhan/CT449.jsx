import { Unfinished } from '../components';
import { collection, onSnapshot, orderBy, query, Timestamp, addDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MDEditor, { title } from '@uiw/react-md-editor';
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";
// import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { removeAccents } from '../utils/firebaseFunctions';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const colDB = 'OCIT_DATA_HOCPHAN';
function CT449() {
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState('');
    // console.log(articles);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, colDB);
        const q = query(articleRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    const arr = articles?.filter((item) => {
        return item.tag === filter;
    });
    let str = arr[0]?.title ? arr[0]?.title : '';
    str = removeAccents(str);
    let title = str.replace(/\s/g, '');
    const data = [{ MAHP: 'CT112' }, { MAHP: 'CT287' }, { MAHP: 'CT178' }, { MAHP: 'CT239' }];
    return (
        <div>
            {/* <Unfinished data="CT449 - Phát Triển Ứng Dụng Web" /> */}
            <div>
                {data &&
                    data.map((item) => {
                        return (
                            <>
                                <p className="p-2 border bg-black " onClick={(e) => setFilter(item.MAHP)}>
                                    {item.MAHP}
                                </p>
                            </>
                        );
                    })}
            </div>
            {arr.length > 0 &&
                arr?.map((item) => {
                    return (
                        <>
                            <Link to={`/data/hocphan/${filter}/${title}/${item.id}`}>
                                <div class="md:w-[80%] m-2 w-[90%]   ">
                                    <div
                                        className={`bg-gray-800 text-white   rounded-xl  shadow-lg p-4 
                                        `}
                                    >
                                        <div class="flex items-center justify-between ">
                                            <div class="flex items-center space-x-2">
                                                <div class="text-sm text-gray-600">{item?.tag}</div>
                                                <div class="md:text-md text-sm md:font-bold">{item?.title}</div>
                                            </div>

                                            <div class="flex items-center space-x-4">
                                                <div class="cursor-pointer">
                                                    <img class="w-5 h-5 rounded-lg" src={item?.userPhotoURL} />
                                                </div>
                                            </div>
                                        </div>

                                        <div class=" py-3 mt-4  text-gray-500 md:font-bold text-sm">
                                            <p class="float-left">#{item?.createdBy}</p>
                                            {/* <p class="float-right">{item?.createdAt}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    );
                })}
        </div>
    );
}

export default CT449;
