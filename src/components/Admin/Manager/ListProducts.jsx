import React, { useEffect, useRef, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { motion } from 'framer-motion';
import { NotFound } from '../../../img';
import { useStateValue } from '../../../context/StateProvider';
import { Link } from 'react-router-dom';
import { deleteItem, pushArr } from '../../../utils/firebaseFunctions';

function ListProducts({ flag, data, scrollValue }) {
    const rowContainer = useRef();
    const [fields, setFields] = useState(true);
    const [Modal, setModal] = useState(true);
    const [alertStatus, setAlertStatus] = useState('');
    const [msg, setMsg] = useState(null);

    const deleteBtn = (index, title) => {
        try {
            setMsg('Deleted ' + title + ' successfully');
            deleteItem(index);
            setFields(false);
            setAlertStatus('success');
            // window.location.reload();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="h-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {!fields && (
                <motion.p
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className={`w-full p-2 rounded-lg text-center text-lg font-semibold -mt-20 mb-4 ${
                        alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'
                    }`}
                >
                    {msg}
                </motion.p>
            )}
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <motion.div key={item.id} className=" bg-cardOverlay rounded-md ">
                            <div className="flex ">
                                <motion.div whileHover={{ scale: 1.5 }} className="w-20 h-20 drop-shadow-2xl">
                                    <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                                </motion.div>

                                <div className="flex flex-col justify-center">
                                    <p className="text-md font-bold">{item?.title}</p>
                                    <p className="text-sm text-gray-800">Price: {item?.price}</p>
                                    <p className="text-sm text-gray-600">{item?.calories}</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-center items-center">
                                <button
                                    type="button"
                                    onClick={() => deleteBtn(index, item?.title)}
                                    class="w-[100px]  py-2 px-3 m-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Delete
                                </button>
                                <Link to={'/update/' + item.id}>
                                    <button
                                        type="button"
                                        class="w-[100px] py-2 px-3 m-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>

        // <div
        //     ref={rowContainer}
        //     className={`w-full flex items-center my-12 scroll-smooth ${
        //         flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center '
        //     }`}
        // >
        //     {data && data.length > 0 ? (
        //         data.map((item) => (
        //             <div
        //                 key={item.id}
        //                 className="w-300 h-[230px] min-w[300px]
        //                 md:w-340  md:min-w-[240px]
        //                 my-12 h-auto bg-gray-100 p-2 m-2
        //                 flex flex-col items-center justify-between
        //                 drop-shadow-xl hover:drop-shadow-xl rounded-lg"
        //             >
        //                 <div className="w-full flex items-center justify-between ">
        //                     <motion.div whileHover={{ scale: 1.5 }} className="w-40 h-40 drop-shadow-2xl">
        //                         <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
        //                     </motion.div>

        //                     <motion.div
        //                         whichTap={{ scale: 0.75 }}
        //                         className="w-8 h-8 rounded-full  bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
        //                     >
        //                         <MdDeleteForever className="text-white" />
        //                     </motion.div>
        //                 </div>
        //                 <div className="w-full flex flex-col items-end justify-end -mt-8">
        //                     <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
        //                     <p className="mt-1 text-sm text-gray-500 ">{item?.calories}</p>
        //                     <div className=" flex -items-center gap-8">
        //                         <p className="text-lg text-headingColor font-semibold">
        //                             <span className=" text-sm text-red-500 ">{item?.price}K</span>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //     ) : (
        //         <div className="w-full flex flex-col items-center justify-center">
        //             <img src={NotFound} alt="" className="h-340" />
        //             <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
        //         </div>
        //     )}
        // </div>
    );
}

export default ListProducts;
