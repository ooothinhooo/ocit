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

//saving new items
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
};

//getAll food items
export const getAllFoodItems = async () => {
    const items = await getDocs(query(collection(firestore, 'foodItems'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};

// get all items in folder
export const getAllItemsInFolder = async () => {
    // const storageRef = ref(storage, `app/oci/${category}/${Date.now()}-${imageFile.name}`);
    const items = await getDocs(query(collection(storage, 'app/oci/'), orderBy('category')));
    console.log(items);

    return items.docs.map((doc) => doc.data());
};

export const deleteItem = async (id) => {
    await firestore.collection('foodItems').doc(id).delete();
    console.log(id);
    return id;
};