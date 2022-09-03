import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { motion } from 'framer-motion';
function HomeContainer() {
    function render() {
        const dataHome = [
            {
                id: 1,
                title: 'Sudoku Game',
                decp: 'CT239',
                price: '550',
                imageURL:
                    'https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/Images%2F1661701225198-ct239_sudoku.png?alt=media&token=a9bcb886-0ca3-4f6f-971f-f2a71ed2ce1a',
            },
            {
                id: 2,
                title: 'DIJKSTRA Tìm đường đi ngắn nhất',
                decp: 'CT239',
                price: '550',
                imageURL:
                    'https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/Images%2F1661701244089-ct239_dijstra.png?alt=media&token=6b3821de-ebd5-4a6b-99ab-d8a4a7ac862f',
            },
            {
                id: 3,
                title: 'Project CT178',
                decp: 'CT178',
                price: '140',
                imageURL:
                    'https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/Images%2F1661700474511-project_ct178.png.png?alt=media&token=2fe892c2-4dc1-47f8-ae4a-5e7f083e0d2b',
            },
        ];

        const random = Math.floor(Math.random() * dataHome.length);
        // console.log(random, dataHome[random]);

        return (
            <div
                key={dataHome[random].id}
                className="w-300 h-[230px] min-w[300px]
        md:w-340  md:min-w-[240px] 
        my-12 h-auto bg-cardOverlay p-2 m-2
        flex flex-col items-center justify-between
        drop-shadow-xl hover:drop-shadow-xl rounded-lg"
            >
                <div className="w-full flex items-center justify-between ">
                    <motion.div whileHover={{ scale: 1.5 }} className="w-40 h-40 drop-shadow-2xl">
                        <img src={dataHome[random]?.imageURL} alt="" className="w-full h-full object-contain" />
                    </motion.div>
                </div>
                <div className="w-full flex flex-col items-end justify-end -mt-8">
                    <p className="text-textColor font-semibold text-base md:text-lg">{dataHome[random]?.title}</p>
                    <p className="mt-1 text-sm text-gray-500 ">{dataHome[random]?.decp}</p>
                    <div className=" flex -items-center gap-8">
                        <p className="text-lg text-headingColor font-semibold">
                            <span className=" text-sm text-red-500 ">{dataHome[random]?.price}K</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
            <div className="py-2 flex-1 flex flex-col justify-center items-start gap-6 ">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} alt="Delivery" className="w-full h-full object-contain" />
                    </div>
                </div>
                <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-lightGray ">
                    Bạn Cần
                    <span className="text-cardNumBg text-[3rem] lg:text-[5rem] ">Tôi Có</span>
                </p>
                <p className="text-base text-white text-center md:text-left md:w-[80%]">
                    Liên hệ với tôi để nhận thêm nhiều thứ mới và tôi nhận làm một số bài thực hành và project cho một
                    số môn. Hãy liên hệ để thoả thuận và biết thêm nhiều chi tiết. Cảm ơn các bạn đã ghé qua
                </p>

                <button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-orange-500 
                    w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all
                    ease-in-out duration-100 md:w-auto"
                >
                    Order Now
                </button>
            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} alt="Hero" className="ml-auto h-420 w-full lg:w-auto lg:h-650" />
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center  lg:px-32 py-4 gap-4 flex-wrap">
                    {render()}

                    {/* {heroData &&
                        heroData.map((item) => (
                            // <div
                            //     key={n.id}
                            //     className=" lg:w-190 p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            // >
                            //     <motion.img src={n.imageSrc} className=" w-10 lg:w-40 -mt-10 lg:-mt-20  " alt="i1" />
                            //     <p className="text-base lg:text-xl font-semibold text-textColor mt-2  lg:mt-4">
                            //         {n.name}
                            //     </p>
                            //     <p className="text-[12px] lg:text-sm text-lightGray font-semibold my-1 lg:my-3">
                            //         {n.decp}
                            //     </p>
                            //     <p className="text-sm font-semibold text-textColor">
                            //         {n.price}
                            //         <span className="text-md text-red-600">K</span>
                            //     </p>
                            // </div>
                            // <div
                            //     key={item.id}
                            //     className="w-300 h-[230px] min-w[300px]
                            // md:w-340  md:min-w-[240px] 
                            // my-12 h-auto bg-gray-100 p-2 m-2
                            // flex flex-col items-center justify-between
                            // drop-shadow-xl hover:drop-shadow-xl rounded-lg"
                            // >
                            //     <div className="w-full flex items-center justify-between ">
                            //         <motion.div whileHover={{ scale: 1.5 }} className="w-40 h-40 drop-shadow-2xl">
                            //             <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                            //         </motion.div>
                            //     </div>
                            //     <div className="w-full flex flex-col items-end justify-end -mt-8">
                            //         <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
                            //         <p className="mt-1 text-sm text-gray-500 ">{item?.decp}</p>
                            //         <div className=" flex -items-center gap-8">
                            //             <p className="text-lg text-headingColor font-semibold">
                            //                 <span className=" text-sm text-red-500 ">{item?.price}K</span>
                            //             </p>
                            //         </div>
                            //     </div>
                            // </div>
                        ))} */}
                </div>
            </div>
        </section>
    );
}

export default HomeContainer;
