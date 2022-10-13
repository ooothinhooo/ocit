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
// ////TODO getAll food items
// export const getAllOCIT_DATA_HOCPHAN = async () => {
//     const items = await getDocs(query(collection(firestore, 'OCIT_DATA_HOCPHAN'), orderBy('id', 'asc')));
//     console.log(items.docs.map(doc));
//     return items.docs.map((doc) => doc.data());
// };
//TODO saving new items
export const Upload_OCIT_DATA_HOCPHAN = async (data) => {
    await setDoc(doc(firestore, 'OCIT_DATA_HOCPHAN', `${data.path.split(' ').join('').toUpperCase()}`), data, {
        merge: true,
    });
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Entire Document has been Upload successfully.',
        showConfirmButton: false,
        timer: 1500,
    });
    let timerInterval;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Entire Document has been Upload successfully.',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            window.location = '/data/hocphan';
        }
    });
};
//TODO delete item ocit hocphan
export const deleteItem_OCIT_DATA_HOCPHAN = async (oid) => {
    const db = getFirestore();
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT_DATA_HOCPHAN'), orderBy('MaHP', 'asc')));
    // const oid = OCIT.docs[index].id;
    // console.log(oid);
    const docRef = doc(db, 'OCIT_DATA_HOCPHAN', oid);

    deleteDoc(docRef)
        .then(() => {
            // alert('Entire Document has been deleted successfully.');
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Entire Document has been deleted successfully.',
                showConfirmButton: false,
                timer: 1500,
            });
            window.location = '/data/hocphan';
        })
        .catch((error) => {
            console.log(error);
        });
};
//TODO update item ocit hocphan
export const updateItem_OCIT_DATA_HOCPHAN = async (oid, updates) => {
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    // const oid = OCIT.docs[index].id;
    // console.log(pushArr[index]);
    // await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').update(updates);
    // const doc = await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').get();
    const db = getFirestore();
    console.log(oid);
    const docRef = doc(db, 'OCIT_DATA_HOCPHAN', oid);

    const data = {
        id: oid,
        makeCode: updates.makeCode,
        title: updates.title,
        description: updates.description,
        tag: updates.tag.toUpperCase(),
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
                title: 'Entire Document has been Upload successfully.',
                showConfirmButton: false,
                timer: 1500,
            });
            let timerInterval;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Entire Document has been Upload successfully.',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    window.location = '/data/hocphan';
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
