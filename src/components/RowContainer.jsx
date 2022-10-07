import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { NotFound } from '../img';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import Swal from 'sweetalert2';
import MDEditor from '@uiw/react-md-editor';

import { ViewCartItem } from '../components';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function RowContainer({ flag, data, scrollValue }) {
    // const MySwal = withReactContent(Swal);
    const rowContainer = useRef();
    const [items, setItems] = useState([]);
    const [{ cartItems, cartShow }, dispatch] = useStateValue();
    const [isModal, setIsModal] = useState(false);
    const [itemProduct, setItemProduct] = useState([
        {
            calories: 'Báo Cáo+ Code Java',
            category: 'CT239',
            code: 'NLCS',
            description: '',
            id: 'CT239DIJKSTRA530NLCS',
            imageURL:
                'https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/app%2Focit%2FImages%2FCT239%2FCT239-NLCS%2FGCFYN-CT239DIJSKTRA.PNG?alt=media&token=4ea9f17e-18da-4134-9e33-c3858eef55f6',
            price: '530',
            qty: 1,
            title: 'DIJKSTRA',
        },
    ]);
    function unique(arr) {
        var formArr = arr.sort();
        var newArr = [formArr[0]];
        for (let i = 1; i < formArr.length; i++) {
            if (formArr[i]?.id !== formArr[i - 1]?.id) {
                newArr.push(formArr[i]);
            }
        }
        return newArr;
    }

    const addToCart = () => {
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const renderSwal = (action, item) => {
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

                if (action == 'action') {
                    setIsModal(false);
                }
                showCart();
            } else {
                setIsModal(false);
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

    const setView = (item) => {
        setIsModal(true);

        // viewProductSwap(item);
        setItemProduct(item);
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <>
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
                            <>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 360, scale: 1 }}
                                    // transition={{ type: 'spring', bounce: 0.25 }}
                                    // animate={{ baseFrequency: 0.5 } as any}
                                    transition={{ type: 'spring', mass: 0.2 }}
                                    key={item.id}
                                    className="w-[150px] h-250 min-h-[200px] min-w[180px]
                        md:w-340  md:min-w-[240px] 
                        my-12 md:h-auto bg-gray-100 p-2 m-2
                        flex flex-col items-center justify-between
                        drop-shadow-xl hover:drop-shadow-xl rounded-lg"
                                    onClick={() => setView(item)}
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
                                            onClick={() => renderSwal('a', item)}
                                        >
                                            <MdShoppingBasket className="text-white" />
                                        </motion.div>
                                    </div>
                                    <div className="w-full flex flex-col items-end justify-end mr-2 -mt-8">
                                        <p className="  text-gray-500 text-sm">{item?.category}</p>
                                        <p className="text-textColor font-semibold text-sm md:text-lg">{item?.title}</p>
                                        <p className="mt-1 text-sm text-gray-500 ">{item?.calories}</p>
                                        <div className="flex justify-center items-center  text-md flex-row ">
                                            <p className=" text-headingColor font-semibold">
                                                {item?.price > 0 ? (
                                                    <>
                                                        <span className="  text-red-500 ">{item?.price}K</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="  text-red-500 ">Free</span>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        ))
                    ) : (
                        <div className="w-full flex flex-col items-center justify-center">
                            <img src={NotFound} alt="" className="h-40 md:340" />
                            <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
                        </div>
                    )}
                </motion.div>{' '}
                <div>
                    <div
                        aria-hidden="true"
                        id="defaultModal"
                        className={`${
                            isModal ? '' : 'hidden'
                        } flex  overflow-y-auto overflow-x-hidden fixed top-0 right-0 justify-center items-center  z-50 w-full md:inset-0 h-modal md:h-full `}
                    >
                        <div className=" p-4 w-full max-w-2xl h-full md:h-auto">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {itemProduct.title}
                                    </h3>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div
                                        data-color-mode="light"
                                        className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                                    >
                                        <MDEditor.Markdown
                                            source={itemProduct?.description}
                                            linkTarget="_blank"

                                            // previewOptions={{
                                            //   linkTarget: "_blank"
                                            // }}
                                        />
                                        {/* <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
                                            {itemProduct?.description}
                                        </ReactMarkdown> */}
                                    </div>
                                </div>
                                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                    <button
                                        data-modal-toggle="defaultModal"
                                        type="button"
                                        onClick={() => renderSwal('action', itemProduct)}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Thêm Vào Giỏ Hàng
                                    </button>
                                    <button
                                        onClick={() => setIsModal(!isModal)}
                                        data-modal-toggle="defaultModal"
                                        type="button"
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Để Sau
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </AnimatePresence>
    );
}

export default RowContainer;
