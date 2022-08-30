import React, { useEffect, useRef, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { motion } from 'framer-motion';
import { NotFound } from '../img';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

function ListProducts({ flag, data, scrollValue }) {
    const rowContainer = useRef();
    const [items, setItems] = useState([]);
    const [{ cartItems }, dispatch] = useStateValue();

    const addToCart = () => {
        // console.log(item);
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    useEffect(() => {
        addToCart();
    }, [items]);
    return (
        <div
            ref={rowContainer}
            className={`w-full flex items-center my-12 scroll-smooth ${
                flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center '
            }`}
        >
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div
                        key={item.id}
                        className="w-300 h-[230px] min-w[300px]
                        md:w-340  md:min-w-[240px] 
                        my-12 h-auto bg-gray-100 p-2 m-2
                        flex flex-col items-center justify-between
                        drop-shadow-xl hover:drop-shadow-xl rounded-lg"
                    >
                        <div className="w-full flex items-center justify-between ">
                            <motion.div whileHover={{ scale: 1.5 }} className="w-40 h-40 drop-shadow-2xl">
                                <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                            </motion.div>

                            <motion.div
                                whichTap={{ scale: 0.75 }}
                                className="w-8 h-8 rounded-full  bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                            >
                                <MdDeleteForever className="text-white" />
                            </motion.div>
                        </div>
                        <div className="w-full flex flex-col items-end justify-end -mt-8">
                            <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
                            <p className="mt-1 text-sm text-gray-500 ">{item?.calories}</p>
                            <div className=" flex -items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">
                                    <span className=" text-sm text-red-500 ">{item?.price}K</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
                    <img src={NotFound} alt="" className="h-340" />
                    <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
                </div>
            )}
        </div>
    );
}

export default ListProducts;