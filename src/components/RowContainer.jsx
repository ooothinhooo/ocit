import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { NotFound } from '../img';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import Swal from 'sweetalert2';
function RowContainer({ flag, data, scrollValue }) {
    // const MySwal = withReactContent(Swal);
    const rowContainer = useRef();
    const [items, setItems] = useState([]);
    const [{ cartItems, cartShow }, dispatch] = useStateValue();

    const addToCart = () => {
        // console.log(item);

        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const renderSwal = (item) => {
        setItems([...cartItems, item]);
        // Swal.fire('Sản Phẩm Được Thêm Vào Giỏ Hàng', 'You clicked the button!', 'success');
        Swal.fire({
            title: ' THÊM VÀO GIỎ THÀNH CÔNG',
            text: `${item.title.toUpperCase()}`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#7FB77E',
            cancelButtonText: 'Tiếp Tục',
            confirmButtonText: 'Xem Giỏ Hàng',
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                showCart();
            }
        });
    };

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    useEffect(() => {
        addToCart();
    }, [items]);
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                ref={rowContainer}
                className={`w-full flex items-center my-12 scroll-smooth scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-100 ${
                    flag ? 'overflow-x-scroll overflow-auto ' : 'overflow-x-hidden flex-wrap justify-center '
                }`}
            >
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="w-200 h-250 min-h-[180px] min-w[200px]
                        md:w-340  md:min-w-[240px] 
                        my-12 md:h-auto bg-gray-100 p-2 m-2
                        flex flex-col items-center justify-between
                        drop-shadow-xl hover:drop-shadow-xl rounded-lg"
                        >
                            <div className="w-full flex items-center justify-between ">
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="md:w-40 md:h-40 w-20 h-20 drop-shadow-2xl"
                                >
                                    <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                                </motion.div>

                                <motion.div
                                    whichTap={{ scale: 0.75 }}
                                    className="w-8 h-8 rounded-full  bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                                    onClick={() => renderSwal(item)}
                                >
                                    <MdShoppingBasket className="text-white" />
                                </motion.div>
                            </div>
                            <div className="w-full flex flex-col items-end justify-end  -mt-8 ">
                                <p className="  text-gray-500 text-sm">{item?.category}</p>
                                <p className="text-textColor font-semibold text-sm md:text-lg">{item?.title}</p>
                                <p className="mt-1 text-sm text-gray-500 ">{item?.calories}</p>
                                <div className="flex justify-center items-center  text-md flex-row ">
                                    <p className=" text-headingColor font-semibold">
                                        <span className="  text-red-500 ">{item?.price}K</span>
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
            </motion.div>
        </AnimatePresence>
    );
}

export default RowContainer;
