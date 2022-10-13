import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function ListDataHocPhan({ arr, filter, title }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <div className=" py-4 rounded-xl   my-2 md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 justify-center items-center">
                {arr.length > 0 &&
                    arr?.map((item) => {
                        return (
                            <>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 360, scale: 1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 180,
                                        damping: 30,
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    class="w-full h-auto relative my-2"
                                >
                                    <Link to={`/data/hocphan/${filter}/${title}/${item.id}`}>
                                        <div class="bg-[#3F4E4F] opacity-150 hover:bg-[#395B64]  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
                                            <div class="w-full flex items-center justify-between">
                                                <span class="font-medium text-sm text-[#3B9AE1]">
                                                    {' '}
                                                    {item?.title.length < 34
                                                        ? item.title
                                                        : item.title.substring(0, 33) + '...'}
                                                </span>
                                            </div>
                                            <div class="flex items-center rounded-lg px-1 py-1 cursor-pointer">
                                                <div class="relative flex flex-shrink-0 items-end">
                                                    <img class="h-12 w-12 rounded-full" src={item?.PhoToCreater} />
                                                    <span class="absolute h-[10px] w-[10px] bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
                                                </div>
                                                <div class="ml-3">
                                                    <span class="text-xs leading-none opacity-50">
                                                        Người đăng Tải:{' '}
                                                    </span>
                                                    <span class="font-semibold tracking-tight text-xs">
                                                        {item?.createdBy}
                                                    </span>
                                                    <p class="text-xs leading-4 pt-2 italic opacity-70">
                                                        {item?.description.substring(0, 100)}
                                                    </p>
                                                    {/* <span class="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
                                                a few seconds ago
                                            </span> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </>
                        );
                    })}
            </div>
        </AnimatePresence>
    );
}

export default ListDataHocPhan;
