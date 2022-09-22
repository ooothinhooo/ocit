import React, { useState, useEffect } from 'react';

import { AiFillCode } from 'react-icons/ai';
import { categories } from '../utils/data';
import { AnimatePresence, motion } from 'framer-motion';
import RowContainer from './RowContainer';
import ChildrenMenu from './ChildrenMenu';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

// import { useStateValue } from '../context/StateProvider';

function MenuContainer() {
    // const [{ cartShow, cartItems, user, total }, dispatch] = useStateValue();
    const [{ OCIT, cartShow }, dispatch] = useStateValue();
    useEffect(() => {}, [cartShow]);

    const [filter, setFilter] = useState('CT178');
    const [modal, setModal] = useState('');
    const [isMenu, setIsMenu] = useState(false);

    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full my-6"
                id="menu"
            >
                <div className="w-full flex flex-col items-center justify-center">
                    <p
                        className="text-2xl font-semibold capitalize  text-headingColor relative 
                    before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400
                    to-orange-600 transition-all ease-in-out duration-100 mr-auto"
                    >
                        Product List
                    </p>
                    <div
                        className="w-full md:flex md:gap-8 mr-2  grid grid-cols-4 items-center justify-start 
                lg:justify-center
                py-6 overflow-x-scroll lg:scrollbar-none"
                    >
                        {categories &&
                            categories.map((category, index) => (
                                <motion.div
                                    whileTap={{ scale: 0.8 }}
                                    onClick={() => setFilter(category.urlParamName)}
                                    key={category?.id}
                                    className={`group  ${filter === category.urlParamName ? 'bg-cardNumBg' : 'bg-card'}
                            md:w-24  md:h-28 w-16 h-18 p-2 m-2
                            cursor-pointer
                            rounded-lg drop-shadow-xl flex flex-col 
                            gap-3 items-center justify-center 
                            hover:bg-cardNumBg`}
                                >
                                    <div
                                        className={`md:w-10 md:h-10 h-5 w-5 rounded-full  
                                ${filter === category.urlParamName ? 'bg-card' : 'bg-cardNumBg'}
                                 group-hover:bg-card p-1
                                 flex items-center justify-center
                                 `}
                                    >
                                        <AiFillCode
                                            className={`${
                                                filter === category.urlParamName ? 'text-textColor' : 'text-white'
                                            } group-hover:text-textColor text-lg`}
                                        />
                                    </div>
                                    <p className=" text-sm text-textColor group-hover:text-card">{category?.name}</p>
                                </motion.div>
                            ))}
                    </div>
                    <ChildrenMenu filter={filter} />
                    <div className="w-full">
                        <RowContainer flag={false} data={OCIT?.filter((n) => n.category == filter)} />
                    </div>
                </div>
            </motion.section>
        </AnimatePresence>
    );
}

export default MenuContainer;
