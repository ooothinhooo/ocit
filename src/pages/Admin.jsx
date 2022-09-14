import React, { useEffect, useRef, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { Link } from 'react-router-dom';
import { deleteItem, pushArr } from '../utils/firebaseFunctions';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
function Admin() {
    const [{ OCIT }, dispatch] = useStateValue();

    const [userModal, setUserModal] = useState(false);
    const [productListModal, setProductListModal] = useState(true);
    const deleteBtn = (index, title) => {
        try {
            // setMsg('Deleted ' + title + ' successfully');
            deleteItem(index);
            // setFields(false);
            // setAlertStatus('success');
        } catch (e) {
            console.error(e);
        }
    };

    function setUserModalFunc() {
        setUserModal(!userModal);
    }
    function handleSetProductListModal() {
        setProductListModal(!productListModal);
    }
    return (
        <>
            <div class="w-full flex h-screen bg-primary">
                <div class="flex flex-col flex-1 w-full">
                    <main class="h-full pb-16 overflow-y-auto">
                        <div class="container grid px-6 mx-auto">
                            <h2 class="my-6 text-2xl font-semibold text-red-300">Admin OCIT</h2>
                            <div class=" mb-4">
                                <Link to={'/createItem'}>
                                    <button class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                        Create Item
                                        <span class="ml-2" aria-hidden="true">
                                            +
                                        </span>
                                    </button>
                                </Link>
                            </div>

                            <div onClick={handleSetProductListModal}>
                                <h4 class="mb-4 flex text-lg font-semibold text-gray-600 dark:text-gray-300">
                                    <AiOutlineAppstoreAdd className="text-3xl mr-2" /> Products List
                                </h4>
                            </div>
                            <div
                                className={`w-full overflow-hidden rounded-lg shadow-xs ${
                                    productListModal ? '' : 'hidden'
                                }`}
                            >
                                <div class="w-full overflow-x-auto">
                                    <table class="w-full whitespace-no-wrap">
                                        <thead>
                                            <tr class="text-xs font-semibold tracking-wide text-left text-gray-100 uppercase border-b  bg-gray-500">
                                                <th class="px-4 py-3">Title</th>
                                                <th class="px-4 py-3">Price</th>
                                                <th class="px-4 py-3">Category</th>
                                                <th class="px-4 py-3">Date</th>
                                                <th class="px-4 py-3">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-primary divide-y ">
                                            {OCIT &&
                                                OCIT.map((item, index) => (
                                                    <>
                                                        {' '}
                                                        <tr class="text-white ">
                                                            <td class="px-4 py-3">
                                                                <div class="flex items-center text-sm">
                                                                    <div class="relative hidden w-10 h-10 mr-3  md:block">
                                                                        <img
                                                                            class="object-cover w-full h-full "
                                                                            src={item?.imageURL}
                                                                            alt=""
                                                                            loading="lazy"
                                                                        />
                                                                        <div
                                                                            class="absolute inset-0 shadow-inner"
                                                                            aria-hidden="true"
                                                                        ></div>
                                                                    </div>
                                                                    <div>
                                                                        <p class="font-semibold">{item?.title}</p>
                                                                        <p class="text-xs text-gray-600 dark:text-gray-400">
                                                                            {item?.category}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-3 text-sm">
                                                                {item?.price == 0 ? <>Free</> : <>{item?.price}K</>}
                                                            </td>
                                                            <td class="px-4 py-3 text-xs">
                                                                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                                    {item?.calories}
                                                                </span>
                                                            </td>
                                                            <td class="px-4 py-3 text-sm">{item.date}</td>
                                                            <td class="px-4 py-3">
                                                                <div class="flex items-center space-x-4 text-sm">
                                                                    <Link to={'/update/' + item.id}>
                                                                        <button
                                                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                            aria-label="Edit"
                                                                        >
                                                                            <svg
                                                                                class="w-5 h-5"
                                                                                aria-hidden="true"
                                                                                fill="currentColor"
                                                                                viewBox="0 0 20 20"
                                                                            >
                                                                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </Link>
                                                                    <button
                                                                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                        aria-label="Delete"
                                                                        onClick={() => deleteBtn(index, item?.title)}
                                                                    >
                                                                        <svg
                                                                            class="w-5 h-5"
                                                                            aria-hidden="true"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path
                                                                                fill-rule="evenodd"
                                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                                clip-rule="evenodd"
                                                                            ></path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h4 class="mb-4 flex text-lg font-semibold text-gray-600 dark:text-gray-300">
                                <button onClick={setUserModalFunc}>
                                    <AiOutlineAppstoreAdd className="text-3xl mr-2" />
                                </button>{' '}
                                User List
                            </h4>

                            <div
                                className={` w-full mb-8 overflow-hidden rounded-lg shadow-xs ${
                                    userModal ? '' : 'hidden'
                                }`}
                            >
                                <div class="w-full overflow-x-auto">
                                    <table class="w-full whitespace-no-wrap">
                                        <thead>
                                            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                <th class="px-4 py-3">Client</th>
                                                <th class="px-4 py-3">Amount</th>
                                                <th class="px-4 py-3">Status</th>
                                                <th class="px-4 py-3">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-primary">
                                            <tr class="text-gray-100">
                                                <td class="px-4 py-3">
                                                    <div class="flex items-center text-sm">
                                                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                            <img
                                                                class="object-cover w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                            <div
                                                                class="absolute inset-0 rounded-full shadow-inner"
                                                                aria-hidden="true"
                                                            ></div>
                                                        </div>
                                                        <div>
                                                            <p class="font-semibold">Hans Burger</p>
                                                            <p class="text-xs text-gray-600 dark:text-gray-400">
                                                                10x Developer
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm">$ 863.45</td>
                                                <td class="px-4 py-3 text-xs">
                                                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                        Approved
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 text-sm">6/10/2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Admin;
