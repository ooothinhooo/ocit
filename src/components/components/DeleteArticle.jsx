import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storage } from '../../firebase.config';
import { toast } from 'react-toastify';
import { deleteObject, ref } from 'firebase/storage';
import { TiDelete } from 'react-icons/ti';
export default function DeleteArticle({ id, imageUrl, colDB }) {
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this article?')) {
            try {
                await deleteDoc(doc(db, colDB, id));
                toast('Article deleted successfully', { type: 'success' });
                const storageRef = ref(storage, imageUrl);
                await deleteObject(storageRef);
            } catch (error) {
                toast('Error deleting article', { type: 'error' });
                console.log(error);
            }
        }
    };
    return (
        <div onClick={handleDelete} className="cursor-pointer">
            <TiDelete className="text-white text-2xl" />
        </div>
    );
}
