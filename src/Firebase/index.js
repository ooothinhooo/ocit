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
    var AccentsMap = [
        'aàảãáạăằẳẵắặâầẩẫấậ',
        'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
        'dđ',
        'DĐ',
        'eèẻẽéẹêềểễếệ',
        'EÈẺẼÉẸÊỀỂỄẾỆ',
        'iìỉĩíị',
        'IÌỈĨÍỊ',
        'oòỏõóọôồổỗốộơờởỡớợ',
        'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
        'uùủũúụưừửữứự',
        'UÙỦŨÚỤƯỪỬỮỨỰ',
        'yỳỷỹýỵ',
        'YỲỶỸÝỴ',
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
};

//TODO getAll food items
export const getAllOCIT = async () => {
    const items = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};

//* data hocphan ocit
////TODO getAll food items
export const getAllOCIT_HOCPHAN = async () => {
    const items = await getDocs(query(collection(firestore, 'OCIT_HOCPHAN'), orderBy('MaHP', 'asc')));
    return items.docs.map((doc) => doc.data());
};

//* data hocphan_DATA ocit
////TODO getAll food items
export const getAllOCIT_DATA_HOCPHAN = async () => {
    const items = await getDocs(query(collection(firestore, 'OCIT_DATA_HOCPHAN'), orderBy('id', 'asc')));
    console.log(items.docs.map(doc));
    return items.docs.map((doc) => doc.data());
};
//* đơn đặt Hàng
//! get order to user
export const getOrder_OCIT = async () => {
    const items = await getDocs(query(collection(firestore, 'ORDER'), orderBy('oid', 'desc')));

    // const items = await getDocs(query(collection(firestore, 'ORDER'), orderBy('date', 'desc')));
    return items.docs.map((doc) => doc.data());
};
