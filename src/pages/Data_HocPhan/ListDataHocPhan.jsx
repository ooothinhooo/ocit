import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { useStateValue } from '../../context/StateProvider';
import { ROOT_USER_EMAIL } from '../../data/main';
import { deleteItem_OCIT_DATA_HOCPHAN } from '../../utils/firebaseFunctions';
import Swal from 'sweetalert2';
function ListDataHocPhan({ arr, filter, title }) {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    const [flag, setFlag] = useState(false);
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
                                    <div className="block justify-center">
                                        <div className=" m-auto  justify-center  items-center">
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
                                                            <span class="flex items-center px-3 py-2">
                                                                {' '}
                                                                {item.title > 33
                                                                    ? item.title
                                                                    : item.title.substring(0, 33) + '...'}
                                                            </span>
                                                        </span>
                                                    </Link>
                                                    <span
                                                        onClick={(e) => {
                                                            setFlag(!flag);
                                                        }}
                                                        className="text-xl text-black mr-3"
                                                    >
                                                        {' '}
                                                        <AiOutlineBars />
                                                    </span>
                                                </span>
                                            </div>
                                            <span
                                                className={` m-auto  justify-center  items-center flex p-2 right-0 ${
                                                    flag ? '' : 'hidden'
                                                }`}
                                            >
                                                {user && user?.uid == item?.createrID ? (
                                                    <>
                                                        <Link
                                                            className="bg-cardOverlay text-gray-100 hover:bg-blue-500 hover:text-primary rounded-lg px-2 py-1 mr-2"
                                                            to={`/data/markdown/hocphan/update/${item.id}/${item?.makeCode}`}
                                                        >
                                                            <h2 class="text-sm  rounded-md"> Update </h2>
                                                        </Link>
                                                        <button
                                                            className="bg-cardOverlay text-gray-100 hover:bg-blue-500 hover:text-primary rounded-lg px-2 py-1 mr-2"
                                                            onClick={(e) => deleteItem(item.id)}
                                                        >
                                                            Xoá
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="bg-cardOverlay text-gray-100 hover:bg-blue-500 hover:text-primary rounded-lg px-1 mr-2">
                                                            Bạn không phải tác giả của tài liệu này
                                                        </span>
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                    </div>
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
                                                        <span class="flex items-center px-3 py-2">
                                                            {item.title >= 34
                                                                ? item.title
                                                                : item.title.substring(0, 33) + '...'}
                                                        </span>
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
