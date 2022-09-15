import React from 'react';
import { Link } from 'react-router-dom';


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
        {
            MaHP: 'CT287',
            name: 'Kiểm Chứng Mô Hình',
            category: 'Chuyên Ngành',
            link: '/CT287',
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
                                            <img class="w-5 h-5 rounded-lg" src={item?.img} />
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
            <div class="h-[200px]"></div>
        </>
    );
}

export default Task;
