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
import { firestore } from '../firebase.config';

//saving new items
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
};

//getAll food items
export const getAllFoodItems = async () => {
    const items = await getDocs(query(collection(firestore, 'foodItems'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};
