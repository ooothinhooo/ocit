import { collection, onSnapshot, orderBy, query, Timestamp, addDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../../firebase.config';
import { useStateValue } from '../../../context/StateProvider';
// import { update_Data_HocPhan } from '../../../utils/firebaseFunctions';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {updateItem_OCIT_DATA_HOCPHAN, removeAccents, makeid} from '../../../utils/firebaseFunctions' 
import data from '../../../data/courses';

const colDB = 'OCIT_Term';
function UpdateData() {
    var today = new Date();
    let { id } = useParams();

    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const photo = user && user.photoURL ? user.photoURL : '';

    const [value, setValue] = React.useState('');
    const [otitle, setoTitle] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [progress, setProgress] = useState(0);
    const [articles, setArticles] = useState([]);
    const [viewprivate, setPrivate] = useState(true);

    // console.log(articles);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, colDB);
        const q = query(articleRef, orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    console.log(articles);
    const code = articles.filter((item) => {
        return item.id === id;
    });
    console.log(code[0]);
    const courses = data.filter(function (item) {
        return item.key === tag;
    });
    const [formData, setFormData] = useState({
        title: code[0]?.title,
        description: '' + code[0]?.description,
        tag: 'tag',
    });

    const saveDetails = (index) => {
        try {
            const data = {
                id: id,
                description: value,
                date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
                title: otitle,
                tag: tag.toUpperCase(),
                nametag: courses[0]?.name,
                private: viewprivate,
                view: [],
                image: [],
                like: [],
                // id: `${tag.toUpperCase()}${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                //     .split(' ')
                //     .join('')
                //     .toUpperCase()}${user.uid}`,
                createrID: user.uid,
                createrName: user.displayName,
                createrPhotoURL: user.photoURL,
                createrEmail: user.email,
            };
            // updateItem(subPath, data);
            updateItem_OCIT_DATA_HOCPHAN(id, data);

            // try {
            //     deleteItemBtn(subPath);
            //     // window.location.reload();
            // } catch (e) {
            //     console.error(e);
            // }
            // setIsLoading(false);
            // setFields(true);
            // setMsg('Data Uploaded successfully');
            // clearData();
            // setAlertStatus('success');
            // setTimeout(() => {
            //     setFields(false);
            //     window.location = '/';
            //     // window.location.reload();
            // }, 4000);
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div className="h-full w-full justify-center items-center">
            <span className="">
                Tên Môn Học Phần: <span className="text-blue-500">{courses[0]?.name}</span>
            </span>
            <div className="my-2 flex justify-center items-center ">
                <button
                    className="md:w-14 h-14 rounded-lg justify-center items-center  mr-2
                        flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                        bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                        dark:focus:ring-blue-800"
                >
                    <CopyToClipboard text={`${code[0]?.description}`}>
                        <div data-tip="Copy Link" className="tooltip  text-gray-100 hover:text-gray-300 cursor-pointer">
                            Copy
                        </div>
                    </CopyToClipboard>
                </button>

                <div className="w-full">
                    <p>{code[0]?.title}</p>
                    <input
                        type="text"
                        className="h-10 w-full bg-primary border text-lg text-blue-400"
                        placeholder="Tiêu Đề Bài Viết"
                        value={otitle}
                        onChange={(e) => setoTitle(e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <p>{code[0]?.tag}</p>
                    <input
                        type="text"
                        className="h-10 w-full bg-primary border text-lg text-blue-400"
                        placeholder="Tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </div>

                <button
                    onClick={saveDetails}
                    className="md:w-14 h-14 rounded-lg justify-center items-center 
                                    flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                                 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                  dark:focus:ring-blue-800"
                >
                    Post
                </button>
            </div>
            <div>
                {' '}
                <MDEditor
                    className="h-full bg-primary"
                    height={800}
                    value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    onChange={setValue}
                />
            </div>
        </div>
    );
}

export default UpdateData;
