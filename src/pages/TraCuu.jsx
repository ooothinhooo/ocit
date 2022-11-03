import React, { useState } from 'react';
import data from '../data/courses';
import { AddArticle, Articles, TableCourses } from '../components';

export default function Test() {
    const [key, setKey] = useState('');
    // const [keyFind, setKeyFind] = useState('');
    const [year, setYear] = useState('2022-2023');
    const [HocKi, setHocKi] = useState('2');
    const [dbCmt, setDbCmt] = useState('');
    const [flag, setFlag] = useState(false);

    // const [courses, setCourses] = useState([]);

    const courses = data.filter(function (item) {
        return item.key === key.toUpperCase();
    });
    // console.log();
    const name = courses?.length > 0 ? courses[0]?.name : '';
    const weight = courses?.length > 0 ? courses[0]?.weight : '';
    const MaHP = courses?.length > 0 ? courses[0]?.key : '';
    var curryear = year.split(/[\s-]+/)[0] + year.split(/[\s-]+/)[1];
    var COLDBCMT = `CMT_[${MaHP}]_[${HocKi}]_[${year}]`;
    function funsetYear(e) {
        setYear(e.target.value);
        setKey('');
    }
    function funsetHocKi(e) {
        setHocKi(e.target.value);
        setKey('');
    }
    return (
        <>
            <div className={`w-full h-full m-auto justify-center items-center `}>
                <div className="flex m-auto justify-center items-center -mt-4">
                    <span className="md:text-md text-sm text-gray-100">
                        NHẬP MÃ HỌC PHẦN NÓ SẼ TẠO MỘT NHÓM CHAT CHO BẠN
                    </span>
                </div>
                <div>
                    <div className="flex m-auto justify-center items-center my-2">
                        <div>
                            <div class="relative inline-flex self-center mr-1">
                                <svg
                                    class="h-6 w-6 md:h-8 md:w-8  text-white bg-purple-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
                                    viewBox="0 0 38 22"
                                    version="1.1"
                                >
                                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                    <g
                                        id="ZahnhelferDE—Design"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            id="ZahnhelferDE–Icon&amp;Asset-Download"
                                            transform="translate(-539.000000, -199.000000)"
                                            fill="#ffffff"
                                            fill-rule="nonzero"
                                        >
                                            <g
                                                id="Icon-/-ArrowRight-Copy-2"
                                                transform="translate(538.000000, 183.521208)"
                                            >
                                                <polygon
                                                    id="Path-Copy"
                                                    transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                                                    points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <select
                                    onChange={(e) => funsetHocKi(e)}
                                    class="md:text-xl text-md font-bold rounded border-2 border-purple-700 text-gray-100 md:h-12 md:w-60 h-10 w-[100px] md:pl-5 md:pr-10 pr-5  bg-primary hover:border-gray-400 focus:outline-none appearance-none"
                                >
                                    <option>2</option>
                                    <option>1</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div class="relative inline-flex self-center mr-1">
                                <svg
                                    class="h-6 w-6 md:h-8 md:w-8  text-white bg-purple-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
                                    viewBox="0 0 38 22"
                                    version="1.1"
                                >
                                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                                    <g
                                        id="ZahnhelferDE—Design"
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <g
                                            id="ZahnhelferDE–Icon&amp;Asset-Download"
                                            transform="translate(-539.000000, -199.000000)"
                                            fill="#ffffff"
                                            fill-rule="nonzero"
                                        >
                                            <g
                                                id="Icon-/-ArrowRight-Copy-2"
                                                transform="translate(538.000000, 183.521208)"
                                            >
                                                <polygon
                                                    id="Path-Copy"
                                                    transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                                                    points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <select
                                    onChange={(e) => funsetYear}
                                    class="md:text-xl text-md font-bold rounded border-2 border-purple-700 text-gray-100 md:h-12 md:w-60 h-10 w-[150px] md:pl-5 md:pr-10 pr-5  bg-primary hover:border-gray-400 focus:outline-none appearance-none"
                                >
                                    <option>{year}</option>
                                    {/* <option>2</option>
                                    <option>3</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex m-auto justify-center items-center">
                        <span className="md:text-xl text-md mx-2 text-blue-300">Mã Học Phần</span>
                        <input
                            type="text"
                            name="key"
                            maxlength="6"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            className="md:w-[10%] w-[40%] bg-primary border text-blue-500 uppercase"
                        />
                        <button class="w-fit h-full border p-2 mx-2 rounded-lg hover:border-blue-400 hover:bg-cardOverlay  hover:text-blue-400">
                            <span className="md:text-xl text-md">Tìm</span>
                        </button>
                    </div>
                </div>

                <div className="bg-[#4d5e8d] shadow-lg h-full w-ful py-1 md:flex block m-auto justify-center items-center mt-2">
                    <p className="text-black text-md p-2 shadow-lg mx-2">Mã Học Phần: {MaHP}</p>
                    <p className="text-black text-md p-2 shadow-lg mx-2">Tên Học Phần: {name}</p>
                    <p className="text-black text-md p-2 shadow-lg mx-2">Tín chỉ: {weight}</p>
                </div>
                <div className="h-full w-full ">
                    {courses.length > 0 && MaHP && HocKi && year ? (
                        <>
                            <TableCourses MaHP={MaHP.toLocaleUpperCase()} year={curryear} n={HocKi} />
                            <div className="mt-2">
                                <AddArticle colDB={COLDBCMT} />
                                <div className="h-full">
                                    <Articles colDB={COLDBCMT} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* <p>Nhập mã học phần để thêm nhóm chát</p> */}
                            <div class="font-sans rounded border px-6 py-4 m-6">
                                <div class="flex items-center">
                                    <img
                                        src="https://lh3.googleusercontent.com/a/ALm5wu3K3dg5RMuckvPuAzGHoV3lKz_a_bwhpkhU-1Ww=s96-c"
                                        class="h-12 w-12 rounded-full"
                                    />
                                    <div class="flex flex-col ml-4">
                                        <a class="font-bold text-blue-600" href="#">
                                            Van Thinh Tran
                                        </a>
                                        <span class="text-grey">@ooothinhooo</span>
                                    </div>
                                    <svg
                                        viewBox="328 355 335 276"
                                        class="ml-auto"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="    M 630, 425    A 195, 195 0 0 1 331, 600    A 142, 142 0 0 0 428, 570    A  70,  70 0 0 1 370, 523    A  70,  70 0 0 0 401, 521    A  70,  70 0 0 1 344, 455    A  70,  70 0 0 0 372, 460    A  70,  70 0 0 1 354, 370    A 195, 195 0 0 0 495, 442    A  67,  67 0 0 1 611, 380    A 117, 117 0 0 0 654, 363    A  65,  65 0 0 1 623, 401    A 117, 117 0 0 0 662, 390    A  65,  65 0 0 1 630, 425    Z" />
                                    </svg>
                                </div>
                                <div class=" mt-3 mb-1 leading-normal text-lg">
                                    Bạn Hãy Nhập Một Mã Học Phần Để Hiện Thị Ra Nhóm Chat Tương Ứng Cho Học Phần Đó
                                </div>
                                <div class="text-grey mb-3 text-sm">11:56 AM - Aug 3, 2022</div>
                                <div class="flex text-grey">
                                    <div class="flex items-center mr-4">
                                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                class="fill-current"
                                                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                            />
                                        </svg>
                                        <span>406</span>
                                    </div>
                                    <div class="flex items-center mr-4">
                                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                class="fill-current"
                                                d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                            />
                                        </svg>
                                        <span>726</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                class="fill-current"
                                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                                            />
                                        </svg>
                                        <span>616</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
