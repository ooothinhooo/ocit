import React, { useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom';

import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { HocPhan_OCIT, Order_OCIT, Product_OCIT } from '../components';
function Admin() {
    const [{ OCIT_ORDER }, dispatch] = useStateValue();

    const [userModal, setUserModal] = useState(true);
    const [productListModal, setProductListModal] = useState(false);

    function setUserModalFunc() {
        setUserModal(!userModal);
    }
    function handleSetProductListModal() {
        setProductListModal(!productListModal);
    }
    // console.log(OCIT_ORDER.length);
    return (
        <>
            <div class="w-full flex h-screen bg-primary">
                <div class="flex flex-col flex-1 w-full">
                    <main class="h-full pb-16 overflow-y-auto">
                        <div class="container grid px-6 mx-auto">
                            <div class="w-[20%] h-20 rounded-2xl  bg-blue-200 items-center justify-center">
                                <h2 class="items-center justify-center flex text-md md:text-2xl text-blue-700">
                                    {' '}
                                    ORDER: {OCIT_ORDER.length - 1}
                                </h2>
                            </div>
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
                                <div class=" mb-4">
                                    <Link to={'/createHocPhan'}>
                                        <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                            Create Học Phần
                                            <span class="ml-2" aria-hidden="true">
                                                +
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" mb-2" onClick={handleSetProductListModal}>
                                <h4
                                    class={`m-2 flex text-lg font-semibold text-gray-600  hover:text-pink-300 cursor-pointer
                                ${productListModal ? 'text-blue-600' : 'text-gray-600'}
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

                            <div className=" mb-2 " onClick={setUserModalFunc}>
                                <h4
                                    class={`m-2 flex text-lg font-semibold  hover:text-pink-300 cursor-pointer
                                ${userModal ? 'text-blue-600' : 'text-gray-600'}`}
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

                            <div
                                className=" mb-2 "
                                // onClick={setUserModalFunc}
                            >
                                <h4
                                    class={`m-2 flex text-lg font-semibold  hover:text-pink-300 cursor-pointer
                                ${userModal ? 'text-blue-600' : 'text-gray-600'}`}
                                >
                                    <AiOutlineAppstoreAdd className="text-3xl mr-2 " />
                                    OCIT Danh Sách Đặt Hàng
                                </h4>
                            </div>

                            <div
                                className={` w-full mb-8 overflow-hidden rounded-lg shadow-xs ${
                                    userModal ? '' : 'hidden'
                                }`}
                            >
                                <Order_OCIT />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Admin;
