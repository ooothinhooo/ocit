import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import Swal from 'sweetalert2';

import { logo } from '../img';
function BannerHome() {
    const [{ user }, dispatch] = useStateValue();
    const arr = [
        {
            MAHP: 'CT112',
            title: 'Mạng Máy Tính',
        },
        {
            MAHP: 'CT242',
            title: 'Kiến Trúc & Thiết Kế Phần Mềm',
        },
        {
            MAHP: 'CT287',
            title: 'Kiểm Chứng Mô Hình',
        },
    ];

    const renderSwal = () => {
        Swal.fire({
            title: 'HÃY ĐĂNG NHẬP ĐỂ XEM THÊM',
            width: 600,
            padding: '3em',
            color: '#fff',
            background: '#A5C9CA',
            backdrop: `
          rgba(0,0,123,0.4)
          url('https://i.ibb.co/XxsmhTz/meme.gif')
          left top
          no-repeat
        `,
        });
    };
    return (
        <>
            <div className="bg-primary">
                <section>
                    <section className="text-gray-600 body-font">
                        <div className="container md:px-5 md:py-2 md:mx-auto -mt-10">
                            <div className="p-5 bg-primary flex items-center mx-auto border-b border-t mb-10 border-gray-200 hover:border-red-400 sm:flex-row flex-col">
                                <div className="sm:w-32 hidden md:inline-flex sm:h-32 h-20 w-20 sm:mr-10  items-center justify-center flex-shrink-0 scale-150">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp154.appspot.com/o/app%2Foci%2F153-1532142_code-coding-css-html-java-layout-php-programming-static-website-icon-png-removebg-preview.png?alt=media&token=a0fecae7-bce9-4b6c-a284-17794a196d87" />
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    {user && user ? (
                                        <>
                                            <h1 className="text-red-400 text-2xl title-font font-bold mb-2">
                                                Wowww! Đăng Nhập Rồi Đấy à
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
                                    <div className="md:flex font-bold text-gray-800 md:text-md text-sm ">
                                        <div class="bg-primary rounded-sm shadow-lg  h-full flex flex-col text-sm">
                                            <header class="text-white flex flex-col rounded-lg ">
                                                <section class="flex space-x-1 bg-primary p-1 pr-0 rounded-t-lg ">
                                                    <nav class="ml-6 md:m-0">
                                                        <ul class="md:flex p-2 space-x-2  ">
                                                            {arr &&
                                                                arr.map((item) => (
                                                                    <>
                                                                        {user && user ? (
                                                                            <>
                                                                                <Link to={`/${item.MAHP}`}>
                                                                                    <li class="md:w-52 w-full p-2 rounded-md flex cursor-pointer border border-purple-400 hover:bg-opacity-20 hover:bg-white">
                                                                                        <img
                                                                                            class="h-4 w-4 my-auto mr-2"
                                                                                            src={logo}
                                                                                            alt=""
                                                                                        />
                                                                                        <span class="overflow-ellipsis overflow-hidden whitespace-nowrap flex-grow">
                                                                                            <span className="md:hidden">
                                                                                                {' '}
                                                                                                {item.MAHP} -
                                                                                            </span>{' '}
                                                                                            {item.title}
                                                                                        </span>
                                                                                    </li>
                                                                                </Link>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <div onClick={renderSwal}>
                                                                                    <li class="md:w-52 w-full p-2 rounded-md flex cursor-pointer border border-purple-400 hover:bg-opacity-20 hover:bg-white">
                                                                                        <img
                                                                                            class="h-4 w-4 my-auto mr-2"
                                                                                            src={logo}
                                                                                            alt=""
                                                                                        />
                                                                                        <span class="overflow-ellipsis overflow-hidden whitespace-nowrap flex-grow">
                                                                                            <span className="md:hidden">
                                                                                                {' '}
                                                                                                {item.MAHP} -
                                                                                            </span>{' '}
                                                                                            {item.title}
                                                                                        </span>
                                                                                    </li>
                                                                                </div>
                                                                            </>
                                                                        )}
                                                                    </>
                                                                ))}
                                                        </ul>
                                                    </nav>
                                                    <div class="flex-grow"></div>
                                                </section>
                                            </header>
                                        </div>
                                    </div>
                                    {user && user ? (
                                        <>
                                            <Link
                                                to="/hocphan"
                                                className="mt-3 text-indigo-500 inline-flex items-center"
                                            >
                                                Truy Cập Học Phần
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
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="mt-3 text-indigo-500 inline-flex items-center"
                                                onClick={renderSwal}
                                            >
                                                Truy Cập Học Phần
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
                                            </div>
                                        </>
                                    )}
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
