import React, { useState } from 'react';

import { AiFillCode } from 'react-icons/ai';
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

function MenuContainer() {
    const [filter, setFilter] = useState('beef');
    const [{ foodItems }, dispatch] = useStateValue();
    return (
        <section className="w-full my-6" id="menu">
            <div className="w-full flex flex-col items-center justify-center">
                <p
                    className="text-2xl font-semibold capitalize  text-headingColor relative 
                    before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400
                    to-orange-600 transition-all ease-in-out duration-100 mr-auto"
                >
                    Product List
                </p>
                <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                    {categories &&
                        categories.map((category) => (
                            <motion.div
                                whileTap={{ scale: 0.8 }}
                                onClick={() => setFilter(category.urlParamName)}
                                key={category?.id}
                                className={`group  ${filter === category.urlParamName ? 'bg-cardNumBg' : 'bg-card'}
                             w-24 min-w-[94px] h-28 cursor-pointer 
                             rounded-lg drop-shadow-xl flex flex-col 
                             gap-3 items-center justify-center 
                              hover:bg-cardNumBg `}
                            >
                                <div
                                    className={`w-10 h-10 rounded-full
                                ${filter === category.urlParamName ? 'bg-card' : 'bg-cardNumBg'} group-hover:bg-card 
                                 flex items-center justify-center`}
                                >
                                    <AiFillCode
                                        className={`${
                                            filter === category.urlParamName ? 'text-textColor' : 'text-white'
                                        } group-hover:text-textColor text-lg`}
                                    />
                                </div>
                                <p className="text-sm text-textColor group-hover:text-card">{category?.name}</p>
                            </motion.div>
                        ))}
                </div>

                <div className="w-full">
                    <RowContainer flag={false} data={foodItems?.filter((n) => n.category == filter)} />
                </div>
            </div>
        </section>
    );
}

export default MenuContainer;
