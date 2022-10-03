import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { useStateValue } from '../../context/StateProvider';
import { ROOT_USER_EMAIL } from '../../data/main';
import { deleteItem_OCIT_DATA_HOCPHAN } from '../../utils/firebaseFunctions';
import Swal from 'sweetalert2';
function ListDataHocPhan({ arr, filter, title }) {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();

    // const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';
    // console.log(user.uid == ROOT_USER_EMAIL[0]);
    // console.log(user);
    // console.log(arr);
    function deleteItem(id) {
        Swal.fire({
            title: 'Bạn Chắc Chắn Muốn Xoá Chứ',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                deleteItem_OCIT_DATA_HOCPHAN(id);
                setTimeout(() => {
                    window.location = '/data/hocphan';
                }, 3000);
            }
        });
    }
    return (
        <div className="md:grid md:gap-x-8 md:gap-y-4 md:grid-cols-3 justify-center items-center">
            {arr.length > 0 &&
                arr?.map((item) => {
                    return (
                        <div className="mr-2 mb-1">
                            <div class="">
                                {user && user?.uid == item?.createrID ? (
                                    <>
                                        <div class="flex flex-wrap justify-center space-x-2 items-center">
                                            <span
                                                class="mx-4 justify-end items-center rounded-full text-gray-500 bg-gray-200 font-semibold
                                                 text-sm flex align-center 
                                                 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max"
                                            >
                                                <Link to={`/data/hocphan/${filter}/${title}/${item.id}`}>
                                                    <span
                                                        className="justify-end items-center rounded-full text-gray-500 bg-gray-200 font-semibold
                                                 text-sm flex align-center 
                                                 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max"
                                                    >
                                                        <img
                                                            class="rounded-full w-14 h-14 max-w-none"
                                                            alt="A"
                                                            src={item.PhoToCreater}
                                                        />
                                                        <span class="flex items-center px-3 py-2">{item.title}</span>
                                                    </span>
                                                </Link>
                                                {/* <button class="bg-transparent hover focus:outline-none">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="times"
                                                            class="w-3 mr-4"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 352 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                                                            ></path>
                                                        </svg>
                                                    </button> */}

                                                <span className={`flex p-2 right-0 `}>
                                                    {user && user?.uid == item?.createrID ? (
                                                        <>
                                                            <Link
                                                                className="bg-primary rounded-lg px-1 mr-2"
                                                                to={`/data/markdown/hocphan/update/${item.id}/${item?.makeCode}`}
                                                            >
                                                                <h2 class="text-sm b p-1 rounded-md"> Update </h2>
                                                            </Link>
                                                            <button
                                                                className="bg-primary border p-1 rounded-lg"
                                                                onClick={(e) => deleteItem(item.id)}
                                                            >
                                                                Xoá
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </span>
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div class="flex flex-wrap justify-center space-x-2 items-center">
                                            <span
                                                class="mx-4 justify-end items-center rounded-full text-gray-500 bg-gray-200 font-semibold
                                                 text-sm flex align-center 
                                                 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max"
                                            >
                                                <Link to={`/data/hocphan/${filter}/${title}/${item.id}`}>
                                                    <span
                                                        className="justify-end items-center rounded-full text-gray-500 bg-gray-300 font-semibold
                                                 text-sm flex align-center 
                                                 cursor-pointer active:bg-gray-300 transition duration-300 ease w-max"
                                                    >
                                                        <img
                                                            class="rounded-full w-14 h-14 max-w-none"
                                                            alt="A"
                                                            src={item.PhoToCreater}
                                                        />
                                                        <span class="flex items-center px-3 py-2">{item.title}</span>
                                                    </span>
                                                </Link>
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default ListDataHocPhan;
