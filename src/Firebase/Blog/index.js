import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    setDoc,
    where,
    getStorage,
} from 'firebase/firestore';
import { firestore, storage } from '../../firebase.config';
import { initializeApp } from 'firebase/app';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { makeid, removeAccents } from '../../Firebase';
import Swal from 'sweetalert2';
var today = new Date();

//Todo Blog
//TODO saving new items
export const Upload_Blog = async (data) => {
    await setDoc(doc(firestore, 'Blog', `${data.path.split(' ').join('').toUpperCase()}`), data, {
        merge: true,
    });
};
//TODO delete item blog
export const deleteItem_Blog = async (oid) => {
    const db = getFirestore();
    const docRef = doc(db, 'Blog', oid);

    deleteDoc(docRef)
        .then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Entire Document has been deleted successfully.',
                showConfirmButton: false,
                timer: 1500,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
//TODO update item blog
export const updateItem_Blog = async (oid, updates) => {
    const db = getFirestore();
    console.log(oid);
    const docRef = doc(db, 'Blog', oid);

    const data = {
        id: oid,
        makeCode: updates.makeCode,
        title: updates.title,
        description: updates.description,
        createdBy: updates.createdBy,
        PhoToCreater: updates.PhoToCreater,
        createrID: updates.createrID,
        date: updates.date,
        path: updates.path,
    };

    setDoc(docRef, data)
        .then((docRef) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Entire Document has been updated successfully',
                showConfirmButton: false,
                timer: 1500,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
