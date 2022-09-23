import React from 'react';
import { AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase.config';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function LikeArticle({ id, likes, colDB }) {
    const [user] = useAuthState(auth);

    const likesRef = doc(db, colDB, id);

    const handleLike = () => {
        if (likes?.includes(user.uid)) {
            updateDoc(likesRef, {
                likes: arrayRemove(user.uid),
            })
                .then(() => {
                    console.log('unliked');
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            updateDoc(likesRef, {
                likes: arrayUnion(user.uid),
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
                color: likes?.includes(user.uid) ? 'red' : null,
            }}
            className="text-2xl text-white"
        >
            {!likes?.includes(user.uid) ? <AiOutlineLike /> : <AiTwotoneLike className="text-red-500" />}
            {/* <AiOutlineLike /> */}
        </div>
    );
}
