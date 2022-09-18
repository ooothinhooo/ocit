import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiMinusCircle } from 'react-icons/hi';

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

let items = [];

function CartItem({ item, setFlag, flag }) {
    const [{ cartItems, total }, dispatch] = useStateValue();
    // const [dispatch] = useStateValue();
    const [qty, setQty] = useState(item?.qty);
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
    const [temp, setTemp] = useState([]);

    const cartDispatch = () => {
        localStorage.setItem('cartItems', JSON.stringify(items));
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        });
    };

    const updateQty = (action, id) => {
        if (action == 'add') {
            setQty(qty + 1);
            cartItems.map((item) => {
                if (item.id === id) {
                    item.qty += 1;
                    setFlag(flag + 1);
                }
            });
            cartDispatch();
        } else {
            // initial state value is one so you need to check if 1 then remove it
            if (qty == 1) {
                items = cartItems.filter((item) => item.id !== id);
                setFlag(flag + 1);
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                        setFlag(flag + 1);
                    }
                });
                cartDispatch();
            }
        }
    };
    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

    return (
        <AnimatePresence>
            <div
                key={item?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 
               `}
            >
                <img src={item?.imageURL} alt="" className="w-20 h-20 max-w-[60px] rounded-full object-contain" />
                {/* name select */}
                <div className="flex flex-col gap-2">
                    <p className="text-base text-gray-50">{item.title}</p>
                    <p className="text-sm block font-semibold text-gray-300">$ {parseFloat(item.price) * qty}</p>
                </div>
                {/* button section */}
                <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                    {/* <motion.div whileTap={{ scale: 0.75 }} className="" onClick={() => updateQty('remove', item?.id)}>
                    <HiMinusCircle className="text-gray-50" />
                </motion.div>
                <p className="w-5 h-5 rounded-md bg-cartBg text-gray-50 flex items-center justify-center">{qty}</p>
                <motion.div whileTap={{ scale: 0.75 }} className="" onClick={() => updateQty('add', item?.id)}>
                    <RiAddCircleFill className="text-gray-50" />
                </motion.div> */}
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        onClick={() => updateQty('remove', item?.id)}
                        className="bg-cardOverlay rounded-3xl p-2"
                    >
                        <AiOutlineDelete className="text-gray-50 text-xl" />
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default CartItem;
