import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { AiOutlineClear } from 'react-icons/ai';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { emptyCart } from '../img';
import CartItem from './CartItem';
function CartContainer() {
    const [{ cartShow, cartItems, user, total }, dispatch] = useStateValue();
    const [tot, setTot] = useState(0);
    const [flag, setFlag] = useState(1);

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        // console.log(tot);
    }, [tot, flag]);

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    const handleClearCart = () => {
        showCart();
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: [],
        });

        localStorage.setItem('cartItems', JSON.stringify([]));
    };

    // useEffect(() => {
    //     let totalPrice = cartItems.reduce(function (accumulator, item) {
    //         return accumulator + item.qty * item.price;
    //     }, 0);
    //     setTot(totalPrice);
    //     console.log(tot);
    // }, [tot, flag]);

    // function TotalCartItem() {
    //     let num = 0;
    //     let result = 0;
    //     for (let e in cartItems) {
    //         num += cartItems[e].price * cartItems[e].qty;
    //         result = Math.round(num * 100) / 100;
    //     }
    //     return result;
    // }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
            >
                <div className="w-full flex items-center justify-between p-4 cursor-pointer">
                    <motion.div className="" whileTap={{ scale: 0.75 }} onClick={showCart}>
                        <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
                    </motion.div>
                    <p className="text-textColor text-lg font-semibold">Cart</p>
                    <motion.p
                        onClick={handleClearCart}
                        whileTap={{ scale: 0.75 }}
                        className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md 
                hover:shadow-md duration-100 ease-in-out transition-all  cursor-pointer text-textColor text-base"
                    >
                        Clear
                        <AiOutlineClear />
                    </motion.p>
                </div>

                {/* bottom section */}
                {cartItems && cartItems.length > 0 ? (
                    <div className="w-full h-full bg-cartBg flex flex-col rounded-t-[2rem] ">
                        {/* cart items section */}
                        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                            {/* cart item */}
                            {cartItems &&
                                cartItems.map((item) => (
                                    <CartItem key={item?.id} item={item} setFlag={setFlag} flag={flag} />
                                ))}
                        </div>

                        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-gray-400 text-lg">Sub Total</p>
                                <p className="text-gray-400 text-lg">$ 0</p>
                            </div>
                            <div className="w-full flex items-center justify-between ">
                                <p className="text-gray-400 text-lg">Delivery</p>
                                <p className="text-gray-400 text-lg">$ 0</p>
                            </div>
                            <div className="w-full border-b border-gray-600 my-2"></div>

                            <div className="w-full flex items-center justify-between ">
                                <p className="text-gray-400 text-xl font-semibold">Total</p>
                                <p className="text-gray-400 text-xl font-semibold">{tot}K</p>
                                {/* <p className="text-gray-400 text-xl font-semibold">$ {TotalCartItem() }  </p> */}
                            </div>
                            {user ? (
                                <Link to="/contact">
                                    <motion.button
                                        whileTap={{ scale: 0.75 }}
                                        type="button"
                                        className="w-full p-2 rounded-full bg-orange-400 text-gray-50 text-lg my-2 hover:shadow-lg 
                         cursor-pointer"
                                    >
                                        Check Out
                                    </motion.button>
                                </Link>
                            ) : (
                                <motion.button
                                    whileTap={{ scale: 0.75 }}
                                    type="button"
                                    className="w-full p-2 rounded-full bg-orange-400 text-gray-50 text-lg my-2 hover:shadow-lg 
                        cursor-pointer"
                                >
                                    Login To Check Out
                                </motion.button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                        <img src={emptyCart} alt="emtycart" className="w-300" />
                        <p className="text-xl text-textColor font-semibold">Add some items to your cart</p>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}

export default CartContainer;
