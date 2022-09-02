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
} from 'firebase/firestore';
import { firestore, storage } from '../firebase.config';
export const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

//saving new items
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'OCIT', `${data.category}-${data.title}-${data.price}-${makeid(5)}`), data, {
        merge: true,
    });
};

//getAll food items
export const getAllOCIT = async () => {
    const items = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
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

// get all items in folder
export const getAllItemsInFolder = async () => {
    // const storageRef = ref(storage, `app/oci/${category}/${Date.now()}-${imageFile.name}`);
    const items = await getDocs(query(collection(storage, 'app/oci/'), orderBy('category')));
    // console.log(items);

    return items.docs.map((doc) => doc.data());
};

//update item
export const updateItem = async (id, updates) => {
    await firestore.collection('OCIT').doc(id).update(updates);
    const doc = await firestore.collection('OCIT').doc(id).get();
    const data = {
        id: doc.id,
        ...doc.data(),
        // title: doc.title,
        // imageURL: doc.imagesAssets,
        // category: doc.category,
        // calories: doc.calories,
        // qty: 1,
        // price: doc.price,
    };
    console.log(data);
    return data;
};

