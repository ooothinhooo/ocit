// import React from 'react';
// import Accordion2 from '../children/Accordion2';
// import './test.css';
// import Tree, { useTreeState } from 'react-hyper-tree';
// function Test() {
//     const data = [
//         {
//             id: 1,
//             name: 'Parent 1',
//             children: [
//                 {
//                     id: 2,
//                     name: 'Child 1',
//                     children: [
//                         {
//                             id: 5,
//                             name: `<a href="https://github.com/" target="_blank">
//                                 Link
//                             </a>
//                                 `,
//                         },
//                         {
//                             id: 6,
//                             name: 'Child 1__2',
//                         },
//                         {
//                             id: 7,
//                             name: 'Child 1__3',
//                         },
//                     ],
//                 },
//             ],
//         },
//         {
//             id: 2,
//             name: 'Parent 2',
//             children: [
//                 {
//                     id: 2,
//                     name: 'Child 1',
//                     children: [
//                         {
//                             id: 5,
//                             name: 'Child 1__1',
//                         },
//                         {
//                             id: 6,
//                             name: 'Child 1__2',
//                         },
//                         {
//                             id: 7,
//                             name: 'Child 1__3',
//                         },
//                     ],
//                 },
//             ],
//         },
//     ];
//     const { required, handlers } = useTreeState({
//         data,
//         id: 'your_tree_id',
//     });

//     return (
//         // <>
//         //     <div class="test_container">
//         //         <h1 class="test_title">eFuse</h1>
//         //         <h1 class="test_title test_title-large">eFuse</h1>
//         //         <div id="test_img-1" class="test_img-container">
//         //             <img class="test_img" src="https://cdn.wallpapersafari.com/78/74/QfSdUt.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_second-animation">
//         //             <img class="test_img" src="https://wallpapershome.com/images/pages/pic_v/13886.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_third-animation">
//         //             <img class="test_img" src="https://images2.alphacoders.com/474/thumb-1920-474206.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_fourth-animation">
//         //             <img class="test_img test_nba" src="https://wallpapercave.com/wp/wp3639738.jpg" />
//         //         </div>

//         //         <div class="test_img-container test_fifth-animation">
//         //             <img class="test_img" src="http://hdqwalls.com/wallpapers/fortnite-g5.jpg" />
//         //         </div>

//         //         <div id="test_img-6" class="test_img-container test_sixth-animation">
//         //             <img
//         //                 class="test_img"
//         //                 src="http://orig15.deviantart.net/3c71/f/2016/121/9/4/reaper_wallpaper__overwatch__by_prollgurke-da0wf9m.png"
//         //             />
//         //         </div>

//         //         <div id="test_img-7" class="test_img-container test_seventh-animation">
//         //             <img class="test_img" src="https://images4.alphacoders.com/885/thumb-1920-885543.jpg" />
//         //         </div>
//         //     </div>
//         // </>
//         // <>
//         //     <Accordion2
//         //         title="Accordion"
//         //         desc={`Switch đảm bảo rằng chỉ một trong các router thích hợp được hiển thị tại một thời điểm. Nó sẽ chỉ hiển thị router đầu tiên phù hợp với url và không hiển thị router nào khác. Vì lý do này, chúng ta phải đặt thành phần 404 cuối cùng`}
//         //     />
//         // </>
//         <div className="bg-[#256D85] text-white p-4 rounded-lg shadow-lg">
//             <Tree {...required} {...handlers} />
//         </div>
//     );
// }

// export default Test;
import { collection, onSnapshot, orderBy, query, Timestamp, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";
// import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { avatars } from '../../img';
const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;
const colDB = 'test';
function Test() {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const photo = user && user.photoURL ? user.photoURL : '';
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        userPhotoURL: photo,
        createdAt: Timestamp.now().toDate(),
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handlePublish = () => {
        if (!value) {
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
                        description: value,
                        imageUrl: url,
                        createdAt: Timestamp.now().toDate(),
                        createdBy: user.displayName,
                        userId: user.uid,
                        // likes: [],
                        // dislikes: [],
                        // comments: [],
                    })
                        .then(() => {
                            toast('Article added successfully', { type: 'success' });
                            setProgress(0);
                        })
                        .catch((err) => {
                            toast('Error adding article', { type: 'error' });
                        });
                });
            },
        );
    };
    const [value, setValue] = React.useState('');

    const [articles, setArticles] = useState([]);
    // console.log(articles);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, 'test');
        const q = query(articleRef, orderBy('createdAt', 'desc'));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });
    }, []);
    return (
        <div className="container">
            <button
                onClick={handlePublish}
                className="md:w-14 h-14 rounded-lg justify-center items-center 
                                    flex ml-2 py-2.5 px-3  text-sm font-medium text-white
                                 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 
                                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                                  dark:focus:ring-blue-800"
            >
                Post
            </button>
            <h3>Auto</h3>
            <MDEditor className="h-full" height={800} value={value} onChange={setValue} />
            {/* <div data-color-mode="light">
                <h3>Light</h3>
                <MDEditor height={200} value={value} onChange={setValue} />
            </div> */}
            <h3>Auto MDEditor.Markdown</h3>
            <MDEditor.Markdown
                style={{ padding: 15 }}
                source={articles[0].description}
                linkTarget="_blank"
                // previewOptions={{
                //   linkTarget: "_blank"
                // }}
            />
        </div>
    );
}

export default Test;