// import { Unfinished } from '../components';
import { collection, onSnapshot, orderBy, query, Timestamp, addDoc, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MDEditor, { title } from '@uiw/react-md-editor';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { removeAccents } from '../../utils/firebaseFunctions';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiFillCode } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { ChildrenMenu, AccordionContainer, AddArticle, Articles, Task, ToggleModal } from '../../components';
import ListDataHocPhan from './ListDataHocPhan';

const colDB = 'OCIT_DATA_HOCPHAN';
function Data_HocPhan() {
    const [articles, setArticles] = useState([]);
    const [HP, setHP] = useState([]);
    const [filter, setFilter] = useState('CT112');
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
    useEffect(() => {
        const articleRef = collection(db, 'OCIT_HOCPHAN');
        const q = query(articleRef, orderBy('date', 'desc'));
        onSnapshot(q, (snapshot) => {
            const HP = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setHP(HP);
        });
    }, []);
    const arr = articles?.filter((item) => {
        return item.tag === filter;
    });
    const array = arr?.filter((item) => {
        return item.view === true;
    });
    // console.log(articles);
    let str = arr[0]?.title ? arr[0]?.title : '';
    str = removeAccents(str);
    let title = str.replace(/\s/g, '');

    const data = [{ MAHP: 'CT112' }, { MAHP: 'CT287' }, { MAHP: 'CT180' }, { MAHP: 'CT242' }];
    return (
        <div className="-mt-4">
            {/* <Unfinished data="CT449 - Phát Triển Ứng Dụng Web" /> */}
            <div>
                <div
                    className="w-full md:flex md:gap-8 md:mr-2  grid grid-cols-4 items-center justify-center
                        py-6  scrollbar-none"
                >
                    {HP &&
                        HP.map((category, index) => (
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                onClick={() => setFilter(category.MaHP)}
                                key={category?.id}
                                className={`group  ${filter === category.MaHP ? 'bg-cardNumBg' : 'bg-card'}
                                    md:w-[130px]  md:h-28 w-16 h-18 p-2 md:m-2  cursor-pointer
                            rounded-lg drop-shadow-xl flex flex-col 
                            gap-3  items-center justify-center 
                            hover:bg-cardNumBg`}
                            >
                                <div
                                    className={`md:w-10 md:h-10 h-5 w-5 rounded-full  
                                ${filter === category.MaHP ? 'bg-card' : 'bg-cardNumBg'}
                                 group-hover:bg-card p-1
                                 flex items-center justify-center
                                 `}
                                >
                                    <AiFillCode
                                        className={`${
                                            filter === category.MaHP ? 'text-textColor' : 'text-white'
                                        } group-hover:text-textColor text-lg`}
                                    />
                                </div>
                                <p className=" text-sm text-textColor group-hover:text-card">{category?.MaHP}</p>
                            </motion.div>
                        ))}
                </div>
                <div className="my-2 -mt-2 flex justify-center items-center">
                    <ChildrenMenu filter={filter} />
                </div>
            </div>
            <div className="">
                <ListDataHocPhan arr={array} filter={filter} title={title} />
            </div>

            <div className="mt-12">
                <AddArticle colDB="cmt_hocphan" />
                <div className="h-full">
                    <Articles colDB="cmt_hocphan" />
                </div>
            </div>
        </div>
    );
}

export default Data_HocPhan;
