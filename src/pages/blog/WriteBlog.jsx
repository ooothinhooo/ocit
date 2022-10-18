import { collection, onSnapshot, orderBy, query, Timestamp, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
import { FaLockOpen, FaLock } from 'react-icons/fa';

import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { removeAccents, makeid } from '../../utils/firebaseFunctions';
import { Upload_Blog } from '../../Firebase/Blog';
const colDB = 'Blog';
function WriteBlog() {
    var today = new Date();
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const photo = user && user.photoURL ? user.photoURL : '';
    const [value, setValue] = React.useState('');
    const [otitle, setoTitle] = React.useState('');
    const [makeCode, setMakeCode] = useState(makeid(6));
    const [progress, setProgress] = useState(0);
    const [view, setView] = useState(true);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        userPhotoURL: photo,
        createdAt: Timestamp.now().toDate(),
    });
    const saveDetails = () => {
        // setIsLoading(true);
        try {
            if (!otitle || !value) {
                alert('Thiếu Dữ Liệu');
            } else {
                const data = {
                    makeCode: makeCode.split(' ').join('').toUpperCase(),
                    id: `${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                        .split(' ')
                        .join('')
                        .toUpperCase()}${user.uid}`,
                    title: otitle,
                    view: view,
                    description: value,
                    createdBy: user.displayName,
                    PhoToCreater: user.photoURL,
                    createrID: user.uid,
                    date: today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear(),
                    path: `${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
                        .split(' ')
                        .join('')
                        .toUpperCase()}${user.uid}`,
                };
                // saveItem(data);
                Upload_Blog(data);
                // setIsLoading(false);
                // setFields(true);
                // alert(`Data Uploaded ${otitle.toUpperCase()} successfully`);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Data Uploaded ${otitle.toUpperCase()} successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                // clearData();
                // setAlertStatus('success');
                setTimeout(() => {
                    // setFields(false);
                    window.location = '/blog';
                }, 500);
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
                <span onClick={(e) => setView(!view)} className="text-4xl p-1  ml-2 ">
                    {!view ? (
                        <>
                            <FaLock className="text-green-00" />
                        </>
                    ) : (
                        <>
                            <FaLockOpen className="text-pink-700" />
                        </>
                    )}
                </span>
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

export default WriteBlog;
