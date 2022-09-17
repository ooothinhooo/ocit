import React from 'react';
import { useStateValue } from '../../../context/StateProvider';
import { deleteItem } from '../../../utils/firebaseFunctions';
function Order_OCIT() {
    const [{ OCIT_ORDER }, dispatch] = useStateValue();

    return (
        <>
            <div class="w-full overflow-x-auto">
                <table class="w-full whitespace-no-wrap">
                    <thead>
                        <tr class="text-xs font-semibold tracking-wide text-left text-gray-100 uppercase border-b  bg-gray-500">
                            <th class="px-4 py-3">User/Email</th>
                            <th class="px-4 py-3">Order/Price</th>
                            <th class="px-4 py-3">Date/Time</th>
                            <th class="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-primary">
                        {OCIT_ORDER?.map((item, index) => (
                            <>
                                {' '}
                                <tr class="text-white ">
                                    <td class="px-4 py-3">
                                        <div class="flex items-center text-sm">
                                            <div class="relative rounded-full hidden w-10 h-10 mr-3  md:block">
                                                <img
                                                    class="object-cover rounded-full w-full h-full "
                                                    src={item?.imgURL}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div class="absolute inset-0 shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p class="font-semibold">{item?.userName}</p>
                                                <p class="text-xs text-gray-600 dark:text-gray-400">{item?.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold">{item?.order}</p>
                                                <p class="text-xs text-gray-600 dark:text-gray-400">
                                                    {item?.totalPrice}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-sm">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold">{item?.date}</p>
                                                <p class="text-xs text-gray-600 dark:text-gray-400">{item?.time}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-3">
                                        <div class="flex items-center space-x-4 text-sm">
                                            <button
                                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5
                                                hover:bg-green-100 hover:rounded-full hover:text-primary text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                aria-label="Delete"
                                                // onClick={() => deleteBtn_OCIT(index, item?.title)}
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
        </>
    );
}

export default Order_OCIT;
