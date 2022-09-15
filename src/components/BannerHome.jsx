import React from 'react';
import { Link } from 'react-router-dom';

// import CT242 from '../HocPhan/CT242';
// import CT112 from '../HocPhan/CT112';
// import CT179 from '../HocPhan/CT179';
// import CT296 from '../HocPhan/CT296';
import { useStateValue } from '../context/StateProvider';
function BannerHome() {
    const [{ OCIT, user }, dispatch] = useStateValue();

    return (
        <>
            <div className="bg-primary">
                <section>
                    <section className="text-gray-600 body-font">
                        <div className="container md:px-5 md:py-2 md:mx-auto -mt-10">
                            <div className="p-5 bg-primary flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                                <div className="sm:w-32 hidden md:inline-flex sm:h-32 h-20 w-20 sm:mr-10  items-center justify-center flex-shrink-0 scale-150">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/app%2Foci%2F153-1532142_code-coding-css-html-java-layout-php-programming-static-website-icon-png-removebg-preview.png?alt=media&token=a0fecae7-bce9-4b6c-a284-17794a196d87" />
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    {user && user ? (
                                        <>
                                            <h1 className="text-red-400 text-2xl title-font font-bold mb-2">
                                                Làm tốt lắm
                                            </h1>
                                            <p className="leading-relaxed text-base text-cardOverlay">
                                                Hãy Khám Phá OCIT nhé
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <h1 className="text-red-400 text-2xl title-font font-bold mb-2">
                                                Đăng Nhập Để Xem Nhiều Hơn
                                            </h1>
                                            <p className="leading-relaxed text-base text-cardOverlay">
                                                Một là đăng nhập, Hai là đăng nhập -)))
                                            </p>
                                        </>
                                    )}
                                    <div className="py-2 ml-1 mr-1 px-1">
                                        <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                                            Javascript
                                        </span>
                                        <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                            ReactJS
                                        </span>
                                        <span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                                            VueJS
                                        </span>
                                        <span class="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                                            MongoDB
                                        </span>
                                        <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                                            Java
                                        </span>
                                    </div>
                                    <div className="md:flex font-bold text-gray-800 md:text-md text-sm">
                                        <div className="w-full md:w-1/2 flex space-x-3 ">
                                            <div className="w-1/2">
                                                <h2 className="text-gray-100">Kiến Trúc & Thiết Kế PM</h2>

                                                <Link to="/CT242">
                                                    <button
                                                        type="button"
                                                        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                                                    >
                                                        CT242
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="w-1/2">
                                                <h2 className="text-gray-100">Mạng Máy Tính</h2>
                                                <Link to="/CT112">
                                                    <button
                                                        type="button"
                                                        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                                                    >
                                                        CT112
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 flex space-x-3">
                                            <div className="w-1/2">
                                                <h2 className="text-gray-100">Quản Trị Hệ Thống</h2>
                                                <button
                                                    type="button"
                                                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                                                >
                                                    CT179
                                                </button>
                                            </div>
                                            <div className="w-1/2">
                                                <h2 className="text-gray-100">Quản Lý Dự Án PM</h2>
                                                <button
                                                    type="button"
                                                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                                                >
                                                    CT223
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/hocphan" className="mt-3 text-indigo-500 inline-flex items-center">
                                        Learn More
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}

export default BannerHome;
