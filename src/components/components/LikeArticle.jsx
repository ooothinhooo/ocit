import React from 'react';
import { AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase.config';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function LikeArticle({ id, likes, colDB }) {
    const [user] = useAuthState(auth);
    const arrLikes = likes.slice(0, 4);
    const likesRef = doc(db, colDB, id);
    // console.log(likes);
    const handleLike = () => {
        if (likes?.includes(user.photoURL)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.photoURL),
            })
                .then(() => {
                    console.log('unliked');
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.photoURL),
            })
                .then(() => {
                    console.log('liked');
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    return (
        <div
            onClick={handleLike}
            style={{
                cursor: 'pointer',
                color: likes?.includes(user.photoURL) ? 'red' : null,
            }}
            className="text-2xl text-white flex items-center justify-center"
        >
            {!likes?.includes(user.photoURL) ? (
                <>
                    <AiOutlineLike />
                </>
            ) : (
                <>
                    <AiTwotoneLike className="text-red-500" />
                </>
            )}
            {/* <AiOutlineLike /> */}
            <span className="mx-2 flex">
                {arrLikes &&
                    arrLikes.map((item) => (
                        <>
                            <img src={item} className="h-6 w-6 rounded-full left-2 " />
                        </>
                    ))}
            </span>
        </div>
    );
}
