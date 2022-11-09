import { collection, onSnapshot, orderBy, query, Timestamp, addDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaLockOpen, FaLock } from 'react-icons/fa';
import MDEditor from '@uiw/react-md-editor';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../../firebase.config';
import { useStateValue } from '../../../context/StateProvider';
// import data from '../../../data/courses_IT';
import data from '../../../data/courses';
import Swal from 'sweetalert2';

import {
    Upload_OCIT_DATA_HOCPHAN,
    getAllOCIT_DATA_HOCPHAN,
    removeAccents,
    makeid,
} from '../../../utils/firebaseFunctions';
const colDB = 'OCIT_Term';
function CreateData() {
    var today = new Date();
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const photo = user && user.photoURL ? user.photoURL : '';
    const [value, setValue] = React.useState('');
    const [otitle, setoTitle] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [makeCode, setMakeCode] = useState(makeid(10));
    const [progress, setProgress] = useState(0);
    const [viewprivate, setPrivate] = useState(true);
    const courses = data.filter(function (item) {
        return item.key === tag.toUpperCase();
    });
    // console.log(courses[0]?.name);
    // getAllOCIT_DATA_HOCPHAN();
    const [articles, setArticles] = useState([]);
    // console.log(articles);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, colDB);
        const q = query(articleRef);
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    // console.log(articles);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        userPhotoURL: photo,
        createdAt: Timestamp.now().toDate(),
    });
    const handlePublish = () => {
        if (!otitle || !value || !tag || !courses[0]?.name) {
            Swal.fire('Thiếu dữ liệu bạn ơi', 'That thing is still around?', 'question');
            return;
        }

        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
        uploadImage.on(
            'state_changed',
            (snapshot) => {
                const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progressPercent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    description: '',
                    image: '',
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, colDB);

                    addDoc(articleRef, {
                        id: makeCode.split(' ').join(''),
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
                    })
                        .then((articleRef) => {
                            let timerInterval;
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Entire Document has been Upload successfully.',
                                html: 'I will close in <b></b> milliseconds.',
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading();
                                    const b = Swal.getHtmlContainer().querySelector('b');
                                    timerInterval = setInterval(() => {
                                        b.textContent = Swal.getTimerLeft();
                                    }, 100);
                                },
                                willClose: () => {
                                    clearInterval(timerInterval);
                                },
                            }).then((result) => {
                                /* Read more about handling dismissals below */
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    window.location = '/data/hocphan';
                                }
                            });
                            setValue('');
                            setoTitle('');
                            setProgress(0);
                        })
                        .catch((err) => {
                            toast('Error adding article', { type: 'error' });
                        });
                });
            },
        );
    };

    const saveDetails = () => {
        // setIsLoading(true);
        try {
            if (!otitle || !value || !tag || !courses[0]?.name) {
                Swal.fire('Thiếu dữ liệu bạn ơi', 'That thing is still around?', 'question');
            } else {
                const data = {
                    id: makeCode.split(' ').join(''),
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
                    // path: `${tag.toUpperCase()}${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                    //     .split(' ')
                    //     .join('')
                    //     .toUpperCase()}${user.uid}`,
                };
                Upload_OCIT_DATA_HOCPHAN(data);
            }
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
                <span onClick={(e) => setPrivate(!viewprivate)} className="text-4xl p-1 mr-1 ">
                    {!viewprivate ? (
                        <>
                            <FaLock className="text-blue-700" />
                        </>
                    ) : (
                        <>
                            <FaLockOpen className="text-pink-700" />
                        </>
                    )}
                </span>
                <input
                    type="text"
                    className="h-10 w-full bg-primary border text-lg text-blue-400"
                    placeholder="Tiêu Đề Bài Viết"
                    value={otitle}
                    onChange={(e) => setoTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="h-10 w-full bg-primary border text-lg text-blue-400 uppercase"
                    placeholder="Tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />

                <button
                    // onClick={handlePublish}
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

export default CreateData;
