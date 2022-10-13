import { collection, onSnapshot, orderBy, query, Timestamp, addDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { removeAccents, makeid } from '../../utils/firebaseFunctions';
import { updateItem_Blog } from '../../Firebase/Blog';
const colDB = 'Blog';
function UpdateBlog() {
    var today = new Date();
    let { id } = useParams();
    let { makeCode } = useParams();
    console.log(id);
    console.log(makeCode);

    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const photo = user && user.photoURL ? user.photoURL : '';

    const [articles, setArticles] = useState([]);
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

    const code = articles.filter((item) => {
        return item.makeCode === makeCode;
    });
    console.log(code[0]);

    const [formData, setFormData] = useState({
        title: code[0]?.title,
        description: '' + code[0]?.description,
        tag: 'tag',
    });
    const [value, setValue] = React.useState('');
    const [otitle, setoTitle] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [progress, setProgress] = useState(0);

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
                        createdAt: Timestamp.now().toDate(),
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
    //     setIsLoading(true);
    //     try {
    //         const data = {
    //             id: `${category.split(' ').join('').toUpperCase()}${removeAccents(title)
    //                 .split(' ')
    //                 .join('')
    //                 .toUpperCase()}${price}${code.split(' ').join('').toUpperCase()}}`,
    //             title: title,
    //             imageURL: imagesAssets,
    //             category: category,
    //             calories: calories,
    //             qty: 1,
    //             price: price,
    //             description: description,
    //             code: code.toUpperCase(),
    //             date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
    //         };
    //         // updateItem(subPath, data);

    //         // try {
    //         //     deleteItemBtn(subPath);
    //         //     // window.location.reload();
    //         // } catch (e) {
    //         //     console.error(e);
    //         // }

    //         setTimeout(() => {
    //             setFields(false);
    //             window.location = '/';
    //             // window.location.reload();
    //         }, 4000);
    //     } catch (e) {

    //     }
    // };

    const saveDetails = (index) => {
        try {
            const data = {
                makeCode: makeCode.split(' ').join('').toUpperCase(),
                id: `${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                    .split(' ')
                    .join('')
                    .toUpperCase()}`,
                title: otitle,
                description: value,
                createdBy: user.displayName,
                PhoToCreater: photo,
                createrID: user.uid,
                date: today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear(),
                path: `${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                    .split(' ')
                    .join('')
                    .toUpperCase()}${user.uid}`,
            };
            // updateItem(subPath, data);
            updateItem_Blog(id, data);
            setTimeout(() => {
                window.location = '/blog';
            }, 1500);
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div className="h-full w-full justify-center items-center">
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

export default UpdateBlog;
