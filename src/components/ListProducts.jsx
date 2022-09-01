import React, { useEffect, useRef, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { motion } from 'framer-motion';
import { NotFound } from '../img';
import { useStateValue } from '../context/StateProvider';
function ListProducts({ flag, data, scrollValue }) {
    const rowContainer = useRef();
    const Team = () => {
        return (
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex">
                        <img
                            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt="Person"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">Oliver Aguilerra</p>
                            <p className="text-sm text-gray-800">Product Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            key={item.id}
                            className="flex bg-cardOverlay rounded-md"
                        >
                            <motion.div whileHover={{ scale: 1.5 }} className="w-20 h-20 drop-shadow-2xl">
                                <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                            </motion.div>

                            <div className="flex flex-col justify-center">
                                <p className="text-md font-bold">{item?.title}</p>
                                <p className="text-sm text-gray-800">Price: {item?.price}</p>
                                <p className="text-sm text-gray-600">{item?.calories}</p>
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
