import React, { useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { HocPhan_OCIT, Order_OCIT, Product_OCIT } from '../components';
import { logo } from '../img';
import { FiTrendingUp } from 'react-icons/fi';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';
function Admin() {
    const [{ OCIT, OCIT_HOCPHAN, OCIT_ORDER }, dispatch] = useStateValue();

    const [userModal, setUserModal] = useState(true);
    const [productListModal, setProductListModal] = useState(false);
    const [orderListModal, setOrderListModal] = useState(false);

    function setUserModalFunc() {
        setUserModal(!userModal);
    }
    function handleSetProductListModal() {
        setProductListModal(!productListModal);
    }
    function setOrderListModalFunc() {
        setOrderListModal(!orderListModal);
    }
    const data = [
        {
            label: 'Products List',
            value: '1',
            desc: <Product_OCIT />,
        },
        {
            label: 'Học Phần',
            value: '2',
            desc: <HocPhan_OCIT />,
        },
        {
            label: 'Order List',
            value: '3',
            desc: <Order_OCIT />,
        },
    ];
    return (
        <>
            <div class="w-full flex h-screen bg-primary">
                <div class="flex flex-col flex-1 w-full">
                    <main class="h-full pb-16 overflow-y-auto">
                        <div class="container grid px-6 mx-auto">
                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-row -mx-3">
                                                <div class="flex-none w-2/3 max-w-full px-3">
                                                    <div>
                                                        <p class="mb-0 font-sans font-semibold leading-normal text-md">
                                                            Products
                                                        </p>
                                                        <h5 class="mb-0 font-bold">
                                                            {OCIT && OCIT ? <> {OCIT.length}</> : <>000</>}
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="px-3 text-right basis-1/3">
                                                    <div class="">
                                                        <MdProductionQuantityLimits className="inline-block w-12 h-12 p-1 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 text-3xl text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-row -mx-3">
                                                <div class="flex-none w-2/3 max-w-full px-3">
                                                    <div>
                                                        <p class="mb-0 font-sans font-semibold leading-normal text-md">
                                                            Học Phần OCIT
                                                        </p>
                                                        <h5 class="mb-0 font-bold">
                                                            {OCIT_HOCPHAN && OCIT_HOCPHAN ? (
                                                                <> {OCIT_HOCPHAN.length}</>
                                                            ) : (
                                                                <>000</>
                                                            )}
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="px-3 text-right basis-1/3">
                                                    <div>
                                                        <BiBook className="inline-block w-12 h-12 p-1 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 text-3xl text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-row -mx-3">
                                                <div class="flex-none w-2/3 max-w-full px-3">
                                                    <div>
                                                        <p class="mb-0 font-sans font-semibold leading-normal text-md">
                                                            Order
                                                        </p>
                                                        <h5 class="mb-0 font-bold">
                                                            {OCIT_ORDER && OCIT_ORDER ? (
                                                                <> {OCIT_ORDER.length}</>
                                                            ) : (
                                                                <>000</>
                                                            )}
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="px-3 text-right basis-1/3">
                                                    <div>
                                                        <FiTrendingUp className="inline-block w-12 h-12 p-1 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 text-3xl text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="px-4 m-6">
                                <div class="md:w-[20%] w-[30%] bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                                    <div class="flex flex-wrap border-b border-gray-200 undefined">
                                        <div class="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink mb-0">
                                            <span class="material-icons text-white text-3xl leading-none">
                                                <FiTrendingUp />
                                            </span>
                                        </div>
                                        <div class="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                            <h5 class="text-gray-500 font-light tracking-wide text-base mb-1">Order</h5>
                                            <span class="text-3xl text-gray-900">
                                                {' '}
                                                {OCIT_ORDER && OCIT_ORDER ? <> {OCIT_ORDER.length}</> : <>000</>}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="text-sm text-gray-700 pt-4 flex items-center undefined">
                                        <span class="text-green-500 ml-1 mr-2">Đơn Đặt Hàng Hiện Có</span>
                                    </div>
                                </div>
                            </div> */}
                            <h2 class="my-6 text-2xl font-semibold text-red-300">Admin OCIT</h2>
                            <div className="flex">
                                <div class=" mb-4 mr-4">
                                    <Link to={'/createItem'}>
                                        <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                            Create Item
                                            <span class="ml-2" aria-hidden="true">
                                                +
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                                <div class=" mb-4 mr-4">
                                    <Link to={'/createHocPhan'}>
                                        <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                            Create Học Phần
                                            <span class="ml-2" aria-hidden="true">
                                                +
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                                <div class=" mb-4 mr-4">
                                    <Link to={'/data/markdown/hocphan/create'}>
                                        <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                            Create Data Học Phần
                                            <span class="ml-2" aria-hidden="true">
                                                +
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <Tabs id="custom-animation" value="1" className="">
                                <TabsHeader className="bg-[#16213E]">
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            className="ml-6  bg-primary p-1 pr-0 rounded-lg cursor-pointer border border-[#075985] text-blue-400 hover:bg-opacity-20 "
                                            key={value}
                                            value={value}
                                        >
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody
                                    className="bg-primary"
                                    animate={{
                                        mount: { y: 0 },
                                        unmount: { y: 250 },
                                    }}
                                >
                                    {data.map(({ value, desc }) => (
                                        <TabPanel key={value} value={value}>
                                            <div>{desc}</div>
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>
                            {/*                            
                            <>
                                <div className=" mb-2">
                                    <h4
                                        class={`m-2 flex text-lg font-semibold text-gray-600  hover:text-pink-300 cursor-pointer
                                ${productListModal ? 'text-blue-600' : 'text-gray-600 hidden'}
                                    `}
                                    >
                                        <AiOutlineAppstoreAdd className="text-3xl mr-2" />
                                        OCIT Danh Sách Sản Phẩm
                                    </h4>
                                </div>
                                <div
                                    className={`w-full overflow-hidden rounded-lg shadow-xs ${
                                        productListModal ? '' : 'hidden'
                                    }`}
                                >
                                    <Product_OCIT />
                                </div>
                            </>
                            <>
                                <div className=" mb-2 ">
                                    <h4
                                        class={`m-2 flex text-lg font-semibold  hover:text-pink-300 cursor-pointer
                                ${userModal ? 'text-blue-600' : 'text-gray-600 hidden'}`}
                                    >
                                        <AiOutlineAppstoreAdd className="text-3xl mr-2 " />
                                        OCIT Danh Sách Học Phần
                                    </h4>
                                </div>
                                <div
                                    className={` w-full mb-8 overflow-hidden rounded-lg shadow-xs ${
                                        userModal ? '' : 'hidden'
                                    }`}
                                >
                                    <HocPhan_OCIT />
                                </div>
                            </>
                            <>
                                <div className=" mb-2 ">
                                    <h4
                                        class={`m-2 flex text-lg font-semibold  hover:text-pink-300 cursor-pointer
                                ${orderListModal ? 'text-blue-600' : 'text-gray-600 hidden'}`}
                                    >
                                        <AiOutlineAppstoreAdd className="text-3xl mr-2 " />
                                        OCIT Danh Sách Đặt Hàng
                                    </h4>
                                </div>
                                <div
                                    className={` w-full mb-8 overflow-hidden rounded-lg shadow-xs ${
                                        orderListModal ? '' : 'hidden'
                                    }`}
                                >
                                    <Order_OCIT />
                                </div>
                            </> */}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Admin;
