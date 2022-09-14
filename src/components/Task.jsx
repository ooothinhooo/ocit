import React from 'react';
import { Link } from 'react-router-dom';
import { GrView } from 'react-icons/gr';

function Task() {
    const HOCPHAN = [
        {
            MaHP: 'CT112',
            name: 'Mạng Máy Tính',
            category: 'Đại Cương',
            link: '/CT112',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },

        {
            MaHP: 'CT178',
            name: 'Nguyên Lý Hệ Điều Hành',
            category: 'Đại Cương',
            link: '/CT178',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT179',
            name: 'Quản Trị Hệ Thống',
            category: 'Cơ sở',
            link: '/CT179',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT1242',
            name: 'Kiến Trúc & Thiết kế PM',
            category: 'Chuyên Ngành',
            link: '/CT242',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT449',
            name: 'Phát Triển Ứng Dụng Web',
            category: 'Nâng Cao',
            link: '/CT449',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT223',
            name: 'Quản Lý Dự Án Phần Mềm',
            category: 'Đại Cương',
            link: '/CT223',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT239',
            name: 'Niên Luận Cơ Sở Ngành',
            category: 'Nâng Cao',
            link: '/CT239',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT240',
            name: 'Nguyên Lý Xây Dựng Phần Mềm',
            category: 'Chuyên Ngành',
            link: '/CT240',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT241',
            name: 'Phân Tích Yêu Cầu  Phần Mềm',
            category: 'Chuyên Ngành',
            link: '/CT241',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
        {
            MaHP: 'CT244',
            name: 'Bảo Trì Phần Mềm',
            category: 'Chuyên Ngành',
            link: '/CT244',
            update: 'Now',
            creater: 'othinho',
            img: 'https://i.ibb.co/rxJfJ6G/image.png',
        },
    ];
    return (
        <>
            <div
                className=" grid md:grid-cols-3 md:gap-3 w-full  h-full bg-primary "
                // :className="{ 'overflow-hidden': isSideMenuOpen}"
            >
                <>
                    {/* <div className="flex flex-col flex-1 w-full">
                <main className="h-full pb-16 overflow-y-auto">
                    <div className="container grid px-6 mx-auto">


                        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                            Học Phần Hiện Có
                        </h4>
                        
                        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs ">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th className="px-4 py-3">Học Phần</th>
                                            <th className="px-4 py-3">Loại</th>
                                            <th className="px-4 py-3">Mã Học Phần</th>
                                            <th className="px-4 py-3">View</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-primary divide-y ">
                                        {HOCPHAN &&
                                            HOCPHAN.map((item) => (
                                                <>
                                                    <tr key={item.MaHP} className="text-gray-100 dark:text-gray-400">
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center md:text-sm text-xs">
                                                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                    <img
                                                                        className="object-cover w-full h-full rounded-full"
                                                                        src={item.img}
                                                                        alt=""
                                                                        loading="lazy"
                                                                    />
                                                                    <div
                                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                                        aria-hidden="true"
                                                                    ></div>
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold">{item.name}</p>
                                                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                                                        {item.creater}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 md:text-sm text-xs ">
                                                            {item.category}
                                                        </td>
                                                        <td className="px-4 py-3   md:text-sm text-xs">
                                                            <span className=" px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                                {item.MaHP}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3  md:text-sm text-xs justify-center items-center">
                                                            {' '}
                                                            <div class="flex items-center justify-center ">
                                                                <div>
                                                                    <Link to={item.link}>
                                                                        <button
                                                                            class="flex p-2.5 bg-cardOverlay rounded-xl hover:rounded-3xl hover:bg-lightGray
                                                                    transition-all duration-300 text-white"
                                                                        >
                                                                            <GrView className="md:h-6 md:w-6 h-4 w-4" />
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                           
                        </div>

                      
                    </div>
                </main>
            </div>  */}
                </>
                {HOCPHAN &&
                    HOCPHAN.map((item) => (
                        <div class="md:w-[80%] m-2 w-[90%]  ">
                            <div class="bg-gray-800 text-white   rounded-xl shadow-lg p-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <div class="text-sm text-gray-600">{item.MaHP}</div>
                                        <div class="md:text-md text-sm md:font-bold">{item.name}</div>
                                    </div>

                                    <div class="flex items-center space-x-4">
                                        <div class="cursor-pointer">
                                            <img class="w-5 h-5 rounded-lg" src={item.img} />
                                        </div>
                                        <div class=" text-gray-500 hover:text-gray-300 cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                                />
                                            </svg>
                                        </div>
                                        <Link to={item.link}>
                                            <div class=" text-gray-500 hover:text-gray-300 cursor-pointer">
                                                <svg
                                                    class="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div class="mt-4 text-gray-500 md:font-bold text-sm">#{item.category}</div>
                            </div>
                        </div>
                    ))}
            </div>
            <div class="h-[300px]"></div>
        </>
    );
}

export default Task;
