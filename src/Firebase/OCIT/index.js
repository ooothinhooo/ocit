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

//*Data OCIT card item

//TODO saving new items
export const saveItem = async (data) => {
    await setDoc(
        doc(
            firestore,
            'OCIT',
            `${data.category.split(' ').join('').toUpperCase()}${removeAccents(data.title)
                .split(' ')
                .join('')
                .toUpperCase()}${data.price}${data.code.split(' ').join('').toUpperCase()}`,
        ),
        data,
        {
            merge: true,
        },
    );
};

//TODO delete item document
export const deleteItem = async (index) => {
    const db = getFirestore();
    const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    const oid = OCIT.docs[index].id;
    const docRef = doc(db, 'OCIT', oid);

    deleteDoc(docRef)
        .then(() => {
            console.log('Entire Document has been deleted successfully.');
            // alert("Entire Document has been deleted successfully.")
        })
        .catch((error) => {
            console.log(error);
        });
};

//TODO update item document
export const updateItem = async (oid, updates) => {
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    // const oid = OCIT.docs[index].id;
    // console.log(pushArr[index]);
    // await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').update(updates);
    // const doc = await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').get();
    console.log(oid);
    const db = getFirestore();
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
