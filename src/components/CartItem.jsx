import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

import { RiAddCircleFill } from 'react-icons/ri';
import { HiMinusCircle } from 'react-icons/hi';

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
function CartItem({ item }) {
    const [qty, setQty] = useState(item.qty);
    const [items, setItems] = useState([]);
    const [{ cartItems }, dispatch] = useStateValue();

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
                }
            });
            cartDispatch();
        } else {
            if (qty == 1) {
                setItems(cartItems.filter((item) => item.id !== id));
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                    }
                });
                cartDispatch();
            }
        }
    };

    useEffect(() => {
        setItems(cartItems);
    }, [qty]);

    return (
        <div key={item.id} className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img src={item?.imageURL} alt="" className="w-20 h-20 max-w-[60px] rounded-full object-contain" />
            {/* name select */}
            <div className="flex flex-col gap-2">
                <p className="text-base text-gray-50">{item?.title}</p>
                <p className="text-sm block font-semibold text-gray-300">$ {parseFloat(item?.price) * qty}</p>
            </div>
            {/* button section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                <motion.div whileTap={{ scale: 0.75 }} className="" onClick={() => updateQty('remove', item?.id)}>
                    <HiMinusCircle className="text-gray-50" />
                </motion.div>
                <p className="w-5 h-5 rounded-md bg-cartBg text-gray-50 flex items-center justify-center">{qty}</p>
                <motion.div whileTap={{ scale: 0.75 }} className="" onClick={() => updateQty('add', item?.id)}>
                    <RiAddCircleFill className="text-gray-50" />
                </motion.div>
            </div>
        </div>
    );
}

export default CartItem;
