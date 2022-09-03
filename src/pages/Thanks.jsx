import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdWifiCalling3 } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Thanks() {
    return (
        <div className="w-full h-full bg-primary justify-center items-center">
            <div className="h-screen">
                <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                        Xin Cảm Ơn Bạn Đã Sử Dụng Dịch Vụ <span class="text-red-500">OCIT</span> Của Chúng Tôi
                    </h5>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                        Chúng Tôi Sẽ Liên Hệ Bạn Một Cách Nhanh Nhất
                    </p>
                    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <Link
                            to={'/'}
                            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <FaHome className="text-3xl mr-2 text-white" />
                            <div class="text-left">
                                <div class="mb-1 text-xs">Home</div>
                                <div class="-mt-1 font-sans text-sm font-semibold">Go To Home</div>
                            </div>
                        </Link>
                        <a
                            href="#"
                            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <MdWifiCalling3 className="text-3xl mr-2 text-white" />
                            <div class="text-left">
                                <div class="mb-1 text-xs">Call </div>
                                <div class="-mt-1 font-sans text-sm font-semibold">Contact Me</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thanks;
