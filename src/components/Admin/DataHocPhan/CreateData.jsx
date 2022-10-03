import { collection, onSnapshot, orderBy, query, Timestamp, addDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";
// import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../../firebase.config';
import { useStateValue } from '../../../context/StateProvider';
import {
    Upload_OCIT_DATA_HOCPHAN,
    getAllOCIT_DATA_HOCPHAN,
    removeAccents,
    makeid,
} from '../../../utils/firebaseFunctions';
const colDB = 'OCIT_DATA_HOCPHAN';
function CreateData() {
    var today = new Date();
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const photo = user && user.photoURL ? user.photoURL : '';

    const [value, setValue] = React.useState('');
    const [otitle, setoTitle] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [makeCode, setMakeCode] = useState(makeid(6));
    const [progress, setProgress] = useState(0);
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
        console.log(otitle);
        if (!value || !otitle) {
            alert('Please fill all the fields');
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
                        // title: formData.title,
                        userPhotoURL: user.photoURL,
                        tag: tag,
                        description: value,
                        title: otitle,
                        imageUrl: url,
                        createdBy: user.displayName,
                        userId: user.uid,
                        render: false,
                        date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
                        // likes: [],
                        // dislikes: [],
                        // comments: [],
                    })
                        .then((articleRef) => {
                            console.log(articleRef.id);
                            alert('Article added successfully');
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
            if (!otitle || !value || !tag) {
                alert('thieu dư lieu');
            } else {
                const data = {
                    makeCode: makeCode.split(' ').join('').toUpperCase(),
                    id: `${tag.toUpperCase()}${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                        .split(' ')
                        .join('')
                        .toUpperCase()}${user.uid}`,
                    title: otitle,
                    description: value,
                    tag: tag.toUpperCase(),
                    createdBy: user.displayName,
                    PhoToCreater: user.photoURL,
                    createrID: user.uid,
                    date: today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear(),
                    path: `${tag.toUpperCase()}${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                        .split(' ')
                        .join('')
                        .toUpperCase()}${user.uid}`,
                };
                // saveItem(data);
                Upload_OCIT_DATA_HOCPHAN(data);
                // setIsLoading(false);
                // setFields(true);
                alert(`Data Uploaded ${otitle.toUpperCase()} successfully`);
                // clearData();
                // setAlertStatus('success');
                setTimeout(() => {
                    // setFields(false);
                }, 4000);
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="h-full w-full justify-center items-center">
            <div className="my-2 flex justify-center items-center ">
                <input
                    type="text"
                    className="h-10 w-full bg-primary border text-lg text-blue-400"
                    placeholder="Tiêu Đề Bài Viết"
                    value={otitle}
                    onChange={(e) => setoTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="h-10 w-full bg-primary border text-lg text-blue-400"
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
