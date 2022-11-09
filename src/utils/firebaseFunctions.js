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
import Swal from 'sweetalert2';
var today = new Date();
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

// //*Data OCIT card item

// //TODO getAll food items
// export const getAllOCIT = async () => {
//     const items = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));

//     return items.docs.map((doc) => doc.data());
// };

// //TODO saving new items
// export const saveItem = async (data) => {
//     await setDoc(
//         doc(
//             firestore,
//             'OCIT',
//             `${data.category.split(' ').join('').toUpperCase()}${removeAccents(data.title)
//                 .split(' ')
//                 .join('')
//                 .toUpperCase()}${data.price}${data.code.split(' ').join('').toUpperCase()}`,
//         ),
//         data,
//         {
//             merge: true,
//         },
//     );
// };

// //TODO delete item document
// export const deleteItem = async (index) => {
//     const db = getFirestore();
//     const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
//     const oid = OCIT.docs[index].id;
//     const docRef = doc(db, 'OCIT', oid);

//     deleteDoc(docRef)
//         .then(() => {
//             console.log('Entire Document has been deleted successfully.');
//             // alert("Entire Document has been deleted successfully.")
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// //TODO update item document
// export const updateItem = async (oid, updates) => {
//     // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
//     // const oid = OCIT.docs[index].id;
//     // console.log(pushArr[index]);
//     // await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').update(updates);
//     // const doc = await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').get();
//     console.log(oid);
//     const db = getFirestore();
//     const docRef = doc(db, 'OCIT', oid);
//     const data = {
//         id: oid,
//         title: updates.title,
//         imageURL: updates.imageURL,
//         category: updates.category,
//         calories: updates.calories,
//         description: updates.description,
//         qty: 1,
//         price: updates.price,
//         code: updates.code,
//     };

//     setDoc(docRef, data)
//         .then((docRef) => {
//             console.log('Entire Document has been updated successfully');
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// //* data hocphan ocit
// ////TODO getAll food items
// export const getAllOCIT_HOCPHAN = async () => {
//     const items = await getDocs(query(collection(firestore, 'OCIT_HOCPHAN'), orderBy('MaHP', 'asc')));
//     return items.docs.map((doc) => doc.data());
// };
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

// //* đơn đặt Hàng
// //! get order to user
// export const getOrder_OCIT = async () => {
//     const items = await getDocs(query(collection(firestore, 'ORDER'), orderBy('oid', 'desc')));

//     // const items = await getDocs(query(collection(firestore, 'ORDER'), orderBy('date', 'desc')));
//     return items.docs.map((doc) => doc.data());
// };
////TODO don dat hang
export const order_OCIT = async (data) => {
    await setDoc(
        doc(
            firestore,
            'ORDER',
            `${removeAccents(data.userName).split(' ').join('').toUpperCase()}_[${data.time}]_[${data.date}]_[${
                data.google_id
            }]`,
        ),
        data,
        {
            merge: true,
        },
    );
    // let timerInterval;
    // Swal.fire({
    //     title: 'Đơn Hàng Đang Được Duyệt',
    //     html: 'Khoang!!! Dừng Khoản <b></b> milliseconds.',
    //     timer: 2000,
    //     timerProgressBar: true,
    //     didOpen: () => {
    //         Swal.showLoading();
    //         const b = Swal.getHtmlContainer().querySelector('b');
    //         timerInterval = setInterval(() => {
    //             b.textContent = Swal.getTimerLeft();
    //         }, 100);
    //     },
    //     willClose: () => {
    //         clearInterval(timerInterval);
    //     },
    // }).then((result) => {
    //     /* Read more about handling dismissals below */
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //         console.log('I was closed by the timer');
    //     }
    // });
};

//TODO delete item ocit hocphan
export const deleteItem_Order = async (index) => {
    const db = getFirestore();
    const OCIT = await getDocs(query(collection(firestore, 'ORDER'), orderBy('oid', 'desc')));

    const ooid = OCIT.docs[index].id;
    // console.log(ooid);
    const docRef = doc(db, 'ORDER', ooid);

    deleteDoc(docRef)
        .then(() => {
            // alert('Entire Document has been deleted successfully.');
            let timerInterval;
            Swal.fire({
                title: 'Đơn Hàng Đang Được Xoá',
                html: 'Khoang!!! Dừng Khoản <b></b> milliseconds.',
                timer: 1000,
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
                    console.log('I was closed by the timer');
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

// //* data hocphan_DATA ocit
// ////TODO getAll food items
// export const getAllOCIT_DATA_HOCPHAN = async () => {
//     const items = await getDocs(query(collection(firestore, 'OCIT_DATA_HOCPHAN'), orderBy('id', 'asc')));
//     console.log(items.docs.map(doc));
//     return items.docs.map((doc) => doc.data());
// };
//TODO saving new items
export const Upload_OCIT_DATA_HOCPHAN = async (data) => {
    await setDoc(doc(firestore, 'OCIT_Term', `${data.id}`), data, {
        merge: true,
    });
    // await setDoc(doc(firestore, 'OCIT_DATA_HOCPHAN', `${data.id}`), data, {
    //     merge: true,
    // });
    // Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Entire Document has been Upload successfully.',
    //     showConfirmButton: false,
    //     timer: 1500,
    // });
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
    // const docRef = doc(db, 'OCIT_DATA_HOCPHAN', oid);
    const docRef = doc(db, 'OCIT_Term', oid);

    // const data = {
    //     id: oid,
    //     description: updates.description,
    //     date: updates.date,
    //     title: updates.title,
    //     tag: updates.tag.toUpperCase(),
    //     nametag: updates.nametag,
    //     private: viewprivate,
    //     view: [],
    //     image: [],
    //     like: [],
    //     // id: `${tag.toUpperCase()}${removeAccents(otitle).split(' ').join('').toUpperCase()}${makeCode
    //     //     .split(' ')
    //     //     .join('')
    //     //     .toUpperCase()}${user.uid}`,
    //     createrID: updates.createrID,
    //     createrName: updates.createrName,
    //     createrPhotoURL: updates.createrPhotoURL,
    //     createrEmail: updates.createrEmail,
    // };

    setDoc(docRef, updates)
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

// //Todo Blog
// //TODO saving new items
// export const Upload_Blog = async (data) => {
//     await setDoc(doc(firestore, 'Blog', `${data.path.split(' ').join('').toUpperCase()}`), data, {
//         merge: true,
//     });
// };
// //TODO delete item blog
// export const deleteItem_Blog = async (oid) => {
//     const db = getFirestore();
//     // const OCIT = await getDocs(query(collection(firestore, 'OCIT_DATA_HOCPHAN'), orderBy('MaHP', 'asc')));
//     // const oid = OCIT.docs[index].id;
//     // console.log(oid);
//     const docRef = doc(db, 'Blog', oid);

//     deleteDoc(docRef)
//         .then(() => {
//             // alert('Entire Document has been deleted successfully.');
//             Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Entire Document has been deleted successfully.',
//                 showConfirmButton: false,
//                 timer: 1500,
//             });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };
// //TODO update item blog
// export const updateItem_Blog = async (oid, updates) => {
//     // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
//     // const oid = OCIT.docs[index].id;
//     // console.log(pushArr[index]);
//     // await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').update(updates);
//     // const doc = await firestore.collection('OCIT').doc('CT240-sach-9999-1mVAA').get();
//     const db = getFirestore();
//     console.log(oid);
//     const docRef = doc(db, 'Blog', oid);

//     const data = {
//         id: oid,
//         makeCode: updates.makeCode,
//         title: updates.title,
//         description: updates.description,
//         createdBy: updates.createdBy,
//         PhoToCreater: updates.PhoToCreater,
//         createrID: updates.createrID,
//         date: updates.date,
//         path: updates.path,
//     };

//     setDoc(docRef, data)
//         .then((docRef) => {
//             // console.log('Entire Document has been updated successfully');
//             Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Entire Document has been updated successfully',
//                 showConfirmButton: false,
//                 timer: 1500,
//             });
//             // alert('Entire Document has been deleted successfully.');
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };








export const pushArr = [];
export const getArr = async () => {
    // const OCIT = await getDocs(query(collection(firestore, 'OCIT'), orderBy('id', 'desc')));
    const OCIT = await getDocs(query(collection(firestore, 'OCIT_HOCPHAN'), orderBy('MaHP', 'desc')));

    // const oid = OCIT.docs[index].id;
    const temp = OCIT.docs;
    for (let i = 0; i < temp.length; i++) {
        pushArr[i] = temp[i].id;
        console.log(pushArr[i]);
    }
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


