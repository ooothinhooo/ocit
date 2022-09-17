import React, { useState } from 'react';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { storage } from '../../../firebase.config';
import { saveOCIT_HocPhan, getAllOCIT_HOCPHAN, makeid, removeAccents } from '../../../utils/firebaseFunctions';
import { useStateValue } from '../../../context/StateProvider';
import { actionType } from '../../../context/reducer';

function CreateHocPhan() {
    var today = new Date();
    const [maHP, setMaHP] = useState('');
    const [tenHP, setTenHP] = useState('');
    const [category, setCategory] = useState('');
    const [flag, setFlag] = useState(false);
    const [creator, setCreator] = useState('');
    const [imagesCreator, setImagesCreator] = useState(null);
    const [{ user, OCIT_HOCPHAN }, dispatch] = useStateValue();

    const uploadImage = (e) => {
        const imageFile = e.target.files[0];
        // console.log(imageFile);
        const storageRef = ref(
            storage,
            `app/ocit/Creator_HocPhan/${maHP}_${makeid(5).toUpperCase()}-${removeAccents(imageFile.name)
                .split('')
                .join('')
                .toUpperCase()}`,
        );
        // const storageRef = ref(storage, `app/oci/${category}/${Date.now()}-${imageFile.name}`);
        // const storageRef = ref(storage, `Images/${Data.now()} - ${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                alert(error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImagesCreator(downloadURL);
                    alert('Success');
                });
            },
        );
    };

    const saveDetails = () => {
        try {
            if (!maHP || !tenHP || !category) {
                alert('Required fields cant be empty');
            } else {
                const data = {
                    MaHP: maHP.toUpperCase(),
                    TenHP: tenHP,
                    imgCreator: 'https://i.ibb.co/rxJfJ6G/image.png',
                    // imgCreator: imagesCreator,

                    creator: creator,
                    flag: flag,
                    category: category,
                    link: `/${maHP}`,
                    date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
                };
                // saveItem(data);
                saveOCIT_HocPhan(data);
                alert(`Data Uploaded ${maHP.toUpperCase()} successfully`);
                clearData();
            }
        } catch (e) {
            alert('Error while uploading : Try again later');

            // fetchData();
            fetchOCIT_HOCPHAN();
        }
    };

    const clearData = () => {
        setMaHP('');
        setTenHP('');
        setImagesCreator('');
        setCategory(null);
        setFlag(null);
        setCreator('');
    };

    const fetchOCIT_HOCPHAN = async () => {
        await getAllOCIT_HOCPHAN().then((data) => {
            dispatch({
                type: actionType.SET_OCIT_HOCPHAN,
                OCIT_HOCPHAN: data,
            });
        });
    };
    console.log(maHP);
    console.log(tenHP);
    console.log(flag);
    console.log(category);
    return (
        <>
            <section class="max-w-4xl p-6 mx-auto bg-primary rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 class="text-xl font-bold text-white capitalize dark:text-white">Thêm Học Phần</h1>
                <div>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white dark:text-gray-200" for="username">
                                Mã Học Phần
                            </label>
                            <input
                                type="text"
                                value={maHP}
                                onChange={(e) => setMaHP(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="emailAddress">
                                Tên Học Phần
                            </label>
                            <input
                                type="text"
                                value={tenHP}
                                onChange={(e) => setTenHP(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">
                                Category
                            </label>
                            <select
                                onChange={(e) => setCategory(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="">Select</option>
                                <option value="Nền Tảng">Nền Tảng</option>
                                <option value="Đại Cương">Đại Cương</option>
                                <option value="Cở Sở">Nâng Câo</option>
                                <option value="Chuyên Ngành">Chuyên Ngành</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">
                                Flag
                            </label>
                            <select
                                onChange={(e) => setFlag(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="">Select</option>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-white dark:text-gray-200" for="emailAddress">
                                Người Đăng
                            </label>
                            <input
                                type="text"
                                value={creator}
                                onChange={(e) => setCreator(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-white">Image</label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg
                                        class="mx-auto h-12 w-12 text-white"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                        <label
                                            for="file-upload"
                                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span class="">Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                class="sr-only"
                                                onChange={uploadImage}
                                            />
                                        </label>
                                        <p class="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button
                            onClick={saveDetails}
                            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateHocPhan;
