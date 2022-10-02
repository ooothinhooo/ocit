import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { ROOT_USER_EMAIL } from '../../data/main';
import { deleteItem_OCIT_DATA_HOCPHAN } from '../../utils/firebaseFunctions';
import Swal from 'sweetalert2';
function ListDataHocPhan({ arr, filter, title }) {
    const [{ user, OCIT_HOCPHAN, OCIT, OCIT_ORDER }, dispatch] = useStateValue();
    // const ROOT_USER_EMAIL = 'ooothinhooo154@gmail.com';
    // console.log(user.uid == ROOT_USER_EMAIL[0]);
    console.log(user);
    console.log(arr);
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
                            <Link to={`/data/hocphan/${filter}/${title}/${item.id}`}>
                                <div class="">
                                    {user && user?.uid == item?.createrID ? (
                                        <>
                                            <div class="bg-gray-500 text-white rounded-lg  w-[98%] space-y-6 p-3">
                                                <div class="flex space-x-4 items-center ">
                                                    <div class="w-12 h-12">
                                                        <img
                                                            alt="avatar"
                                                            className="w-full rounded-lg"
                                                            src={item.PhoToCreater}
                                                        />
                                                    </div>

                                                    <div class="space-y-2">
                                                        <div class="flex space-x-2 items-center">
                                                            <h2 class="text-base"> {item.title} </h2>
                                                            {user && user?.uid == item?.createrID ? (
                                                                <>
                                                                    <Link
                                                                        to={`/data/markdown/hocphan/update/${item.id}/${item?.makeCode}`}
                                                                    >
                                                                        <h2 class="text-sm border p-1 rounded-md">
                                                                            {' '}
                                                                            Update{' '}
                                                                        </h2>
                                                                    </Link>
                                                                    <button
                                                                        className="border p-1 rounded-lg"
                                                                        onClick={(e) => deleteItem(item.id)}
                                                                    >
                                                                        Xoá
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                            <svg
                                                                class="h-4 w-4 text-blue-500"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            {/* <div class="  text-xs text-slate-400">posted an update</div> */}
                                                        </div>
                                                        <p class=" text-xs text-slate-400">{item?.date}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p class="text-sm leading-6 text-slate-300">
                                                        {item.description.substring(0, 100) + '...'}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div class="bg-slate-800 text-white rounded-lg  w-[98%] space-y-6 p-3">
                                                <div class="flex space-x-4 items-center ">
                                                    <div class="w-12 h-12">
                                                        <img
                                                            alt="avatar"
                                                            className="w-full rounded-lg"
                                                            src={item.PhoToCreater}
                                                        />
                                                    </div>

                                                    <div class="space-y-2">
                                                        <div class="flex space-x-2 items-center">
                                                            <h2 class="text-base"> {item.title} </h2>
                                                            {user && user?.uid == item?.createrID ? (
                                                                <>
                                                                    <Link
                                                                        to={`/data/markdown/hocphan/update/${item.id}/${item?.makeCode}`}
                                                                    >
                                                                        <h2 class="text-sm border p-1 rounded-md">
                                                                            {' '}
                                                                            Update{' '}
                                                                        </h2>
                                                                    </Link>
                                                                    <button
                                                                        className="border p-1 rounded-lg"
                                                                        onClick={(e) => deleteItem(item.id)}
                                                                    >
                                                                        Xoá
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}
                                                            <svg
                                                                class="h-4 w-4 text-blue-500"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            {/* <div class="  text-xs text-slate-400">posted an update</div> */}
                                                        </div>
                                                        <p class=" text-xs text-slate-400">{item?.date}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p class="text-sm leading-6 text-slate-300">
                                                        {item.description.substring(0, 100) + '...'}
                                                    </p>
                                                </div>

                                                {/* <div class="flex justify-between pt-5">
                                            <svg
                                                class="h-4 w-4 text-red-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                                />
                                            </svg>

                                            <div class="text-slate-400 text-sm">
                                                <p>23 Comments</p>
                                            </div>
                                        </div> */}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}

export default ListDataHocPhan;
