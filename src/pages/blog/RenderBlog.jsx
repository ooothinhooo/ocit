import { collection, onSnapshot, orderBy, query, Timestamp, addDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '@uiw/react-md-editor';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

// No import is required in the WebPack.
// import '@uiw/react-md-editor/dist/markdown-editor.css';
// import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db, auth } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ChildrenMenu, AccordionContainer, AddArticle, Articles, Task, ToggleModal } from '../../components';

function RenderBlog() {
    let { id } = useParams();
    const CMT_DB = 'CMT_VIEW_HOCPHAN' + '_' + id;
    // console.log();
    // console.log('props form link', this.params, this); //props not recived
    const [articles, setArticles] = useState([]);
    // const [user] = useAuthState(auth);
    useEffect(() => {
        const articleRef = collection(db, 'Blog');
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
    // console.log(arr);
    return (
        <div className="bg-primary">
            <span className="md:text-3xl text-xl text-blue-600">{arr[0]?.title}</span>
            <MDEditor.Markdown
                style={{ padding: 15 }}
                source={arr[0]?.description}
                linkTarget="_blank"

                // previewOptions={{
                //   linkTarget: "_blank"
                // }}
            />
            <div className="mt-12 bg-primary">
                <AddArticle colDB={CMT_DB} />
                <div className="h-full">
                    <Articles colDB={CMT_DB} />
                </div>
            </div>
        </div>
    );
}

export default RenderBlog;
