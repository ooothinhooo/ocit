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
import Swal from 'sweetalert2';
import { makeid, removeAccents } from '../../Firebase';
var today = new Date();
////TODO save ocit hocphan data
export const saveOCIT_HocPhan = async (data) => {
    await setDoc(doc(firestore, 'OCIT_HOCPHAN', `${data.MaHP}`), data, {
        merge: true,
    });
};
//TODO delete item ocit hocphan
export const deleteItem_OCIT_HOCPHAN = async (index) => {
    const db = getFirestore();
    const OCIT = await getDocs(query(collection(firestore, 'OCIT_HOCPHAN'), orderBy('MaHP', 'asc')));
    const oid = OCIT.docs[index].id;
    console.log(oid);
    const docRef = doc(db, 'OCIT_HOCPHAN', oid);

    deleteDoc(docRef)
        .then(() => {
            alert('Entire Document has been deleted successfully.');
        })
        .catch((error) => {
            console.log(error);
        });
};
//TODO update item ocit hocphan
export const updateItem_OCIT_HOCPHAN = async (oid, updates) => {
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    // const oid = OCIT.docs[index].id;
    // console.log(pushArr[index]);
    // await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').update(updates);
    // const doc = await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').get();
    const db = getFirestore();
    console.log(oid);
    const docRef = doc(db, 'OCIT', oid);

    const data = {
        id: oid,
        title: updates.title,
        imageURL: updates.imageURL,
        category: updates.category,
        calories: updates.calories,
        description: updates.description,
        qty: 1,
        price: updates.price,
        code: updates.code,
    };

    setDoc(docRef, data)
        .then((docRef) => {
            console.log('Entire Document has been updated successfully');
        })
        .catch((error) => {
            console.log(error);
        });
};
