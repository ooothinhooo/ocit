import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { db } from '../../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../../firebase.config';
import Articles from './Articles';
import { useStateValue } from '../../context/StateProvider';

export default function Comment({ id, colDB }) {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [currentlyLoggedinUser] = useAuthState(auth);
    const commentRef = doc(db, colDB, id);
    useEffect(() => {
        const docRef = doc(db, colDB, id);
        onSnapshot(docRef, (snapshot) => {
            setComments(snapshot.data().comments);
        });
    }, []);
    console.log(comments);
    const handleChangeComment = (e) => {
        if (e.key === 'Enter') {
            updateDoc(commentRef, {
                comments: arrayUnion({
                    user: currentlyLoggedinUser.uid,
                    userName: currentlyLoggedinUser.displayName,
                    comment: comment,
                    createdAt: new Date(),
                    commentId: uuidv4(),
                }),
            }).then(() => {
                setComment('');
            });
        }
    };

    // delete comment function
    const handleDeleteComment = (comment) => {
        console.log(comment);
        updateDoc(commentRef, {
            comments: arrayRemove(comment),
        })
            .then((e) => {
                console.log(e);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="m-auto w-[100%] -mt-2">
            <div>
                {comments !== null &&
                    comments.map(({ commentId, user, comment, userName, createdAt }) => (
                        <div key={commentId}>
                            <div
                                class={`text-left  flex rounded-md space-x-2 mb-1  border-l py-2 border-[#]
                          `}
                            >
                                <div class="block">
                                    <div class=" w-full  px-2 pb-2">
                                        <div class="font-medium flex">
                                            <div class="flex justify-center">
                                                <span
                                                    className={`md:text-xl text-md text-blue-400 ${
                                                        user === user.uid ? '' : ''
                                                    }`}
                                                >
                                                    {userName}
                                                </span>

                                                <span className={`ml-4`}>
                                                    {user === user.uid && (
                                                        <span
                                                            className="md:text-2xl text-lg text-pink-400"
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() =>
                                                                handleDeleteComment({
                                                                    commentId,
                                                                    user,
                                                                    comment,
                                                                    userName,
                                                                    createdAt,
                                                                })
                                                            }
                                                        >
                                                            <MdOutlineDeleteForever />
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            class={` p-2 shadow-lg rounded-lg  ${
                                                user === user.uid ? 'bg-[#4D4545]' : 'bg-[#283149]'
                                            }`}
                                        >
                                            <span className="text-gray-200 text-sm md:text-md"> {comment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="border p-2 mt-2 row">
                                <div className="col-11">
                                    <span
                                        className={`badge text-black ${
                                            user === currentlyLoggedinUser.uid ? 'bg-success' : 'bg-blue-400'
                                        }`}
                                    >
                                        {userName}
                                    </span>
                                    {comment}
                                </div>
                                <div className="col-1">
                                    {user === currentlyLoggedinUser.uid && (
                                        <i
                                            className="fa fa-times"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                                handleDeleteComment({ commentId, user, comment, userName, createdAt })
                                            }
                                        >
                                            X
                                        </i>
                                    )}
                                </div>
                            </div> */}
                        </div>
                    ))}
                {user && user ? (
                    <input
                        type="text"
                        className="form-control mt-4 mb-5 w-full bg-[#283149] text-gray-200"
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        placeholder="Add a comment"
                        onKeyUp={(e) => {
                            handleChangeComment(e);
                        }}
                    />
                ) : (
                    <>
                        <span
                            type="text"
                            className="form-control mt-4 mb-5 w-full bg-[#283149] text-gray-200 border"
                            readonly
                        >
                            Vui lòng đăng nhập để Comment
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}
