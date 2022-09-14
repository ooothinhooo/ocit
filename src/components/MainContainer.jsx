import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useStateValue } from '../context/StateProvider';

import HomeContainer from './HomeContainer';
import RowContainer from './RowContainer';
import MenuContainer from './MenuContainer';
import CartContainer from './CartContainer';
import Footer from './Footer';
import Tabs from './Tabs';
import Banner from './Banner';
import meme from '../img/meme.gif';
import BannerHome from './BannerHome';
import Task from './Task';
function MainContainer() {
    const [{ OCIT, cartShow, user }, dispatch] = useStateValue();

    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {}, [scrollValue, cartShow]);

    return (
        <div className=" w-full h-full flex flex-col  items-center  justify-center">
            <div className="w-full ">
                <BannerHome />
            </div>
            <HomeContainer />
            <div className="w-full my-6">
                <Banner
                    ImagePhoto={
                        'https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/app%2Focit%2FImages%2FCT178%2FCT178-PROJECT%2FBJ3MG-CT178PROJECT.PNG?alt=media&token=51a67716-7c81-4e4b-a98e-6ddbedd85edb'
                    }
                    title={'Hướng Dẫn Làm Project CT178'}
                    desc={'Nhanh Tay Liên Hệ Giá Cả Tính Sau'}
                />
            </div>
            <div id="menu">
                <MenuContainer />
            </div>

            <section className="w-full my-6">
                <div className="w-full flex items-center justify-between">
                    <p
                        className="text-2xl font-semibold capitalize
                     text-headingColor relative before:absolute 
                     before:rounded-lg before:content before:w-32 before:h-1
                      before:-bottom-1 before:left-0 before:bg-orange-500 
                      transition-all ease-in-out duration-100"
                    >
                        Featured Products
                    </p>
                    {/* button <> */}
                    <div className="hidden md:flex gap-3 items-center">
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 
                            cursor-pointer transition-all ease-in-out 
                            hover:shadow-lg 
                            flex items-center justify-center"
                            onClick={() => setScrollValue(-200)}
                        >
                            <MdChevronLeft className="text-lg text-white" />
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all ease-in-out cursor-pointer duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                            onClick={() => setScrollValue(200)}
                        >
                            <MdChevronRight className="text-lg text-white" />
                        </motion.div>
                    </div>
                </div>
                {/* component */}
                {/* <RowContainer flag={true} data={OCIT?.filter((n) => n.category === 'chicken')} /> */}
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <RowContainer scrollValue={scrollValue} flag={true} data={OCIT} />
                    </motion.div>
                </AnimatePresence>
            </section>
            {/* <section className="w-full my-6"></section>  */}

            {cartShow && <CartContainer />}

            {/* <Tabs /> */}
            <Footer />
            {/* <Task /> */}
        </div>
    );
}

export default MainContainer;
