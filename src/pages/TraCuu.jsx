import React, { useState } from 'react';
import data from '../data/courses';
import { AddArticle, Articles } from '../components';

export default function Test() {
    const [key, setKey] = useState('');
    // const [keyFind, setKeyFind] = useState('');
    const [year, setYear] = useState('2022-2023');
    const [HocKi, setHocKi] = useState('2');
    const courses = data.filter(function (item) {
        return item.key === key.toUpperCase();
    });
    // console.log();
    const name = courses.length > 0 ? courses[0].name : '';
    const weight = courses.length > 0 ? courses[0].weight : '';
    const MaHP = courses.length > 0 ? courses[0].key : '';

    const dbCmt = `CMT_[${MaHP}]_[${HocKi}]_[${year}]`;
    // console.log(courses[0]);
    // console.log(year);
    // console.log(HocKi);
    // console.log(dbCmt);
    const getInputCourses = () => {};
    return (
        <>
            <div className="w-full h-full m-auto justify-center items-center">
                <div className="flex m-auto justify-center items-center -mt-4">
                    <span className="md:text-md text-sm">NHẬP MÃ HỌC PHẦN NÓ SẼ TẠO MỘT NHÓM CHAT CHO BẠN</span>
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
                                    onChange={(e) => setHocKi(e.target.value)}
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
                                    onChange={(e) => setYear(e.target.value)}
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
                            onChange={(e) => setKey(e.target.value)}
                            className="md:w-[10%] w-[40%] bg-primary border text-blue-500"
                        />
                        <button
                            onClick={getInputCourses}
                            class="w-fit h-full border p-2 mx-2 rounded-lg hover:border-blue-400 hover:bg-cardOverlay  hover:text-blue-400"
                        >
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
                    {courses.length > 0 && !key == '' ? (
                        <>
                            <div className="mt-2">
                                <AddArticle colDB={dbCmt} />
                                <div className="h-full">
                                    <Articles colDB={dbCmt} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Nhập mã học phần để thêm nhóm chát</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
