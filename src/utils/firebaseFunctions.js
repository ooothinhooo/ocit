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
import { firestore, storage } from '../firebase.config';
import { initializeApp } from 'firebase/app';
import { getAuth, sendEmailVerification } from 'firebase/auth';
export const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
export const removeAccents = (str) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
};
//saving new items
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

//getAll food items
export const getAllOCIT = async () => {
    const items = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};

export const pushArr = [];
export const getArr = async () => {
    const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    // const oid = OCIT.docs[index].id;
    const temp = OCIT.docs;
    for (let i = 0; i < temp.length; i++) {
        pushArr[i] = temp[i].id;
        // console.log(pushArr[i]);
    }
};
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
export const deleteItemBtn = async (oid) => {
    const db = getFirestore();
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    // const oid = OCIT.docs[index].id;
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
// get all items in folder
export const getAllItemsInFolder = async () => {
    // const storageRef = ref(storage, `app/oci/${category}/${Date.now()}-${imageFile.name}`);
    const items = await getDocs(query(storage, '/app/ocit/Images/'));
    console.log('Images');
    console.log(items);
};

//update item
export const updateItem = async (oid, updates) => {
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    // const oid = OCIT.docs[index].id;
    // console.log(pushArr[index]);
    // await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').update(updates);
    // const doc = await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').get();
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


