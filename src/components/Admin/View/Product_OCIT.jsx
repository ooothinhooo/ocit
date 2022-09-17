import React from 'react';
import { useStateValue } from '../../../context/StateProvider';
import { Link } from 'react-router-dom';
import { deleteItem } from '../../../utils/firebaseFunctions';

function Product_OCIT() {
    const [{ OCIT }, dispatch] = useStateValue();

    const deleteBtn_OCIT = (index, title) => {
        try {
            // setMsg('Deleted ' + title + ' successfully');
            deleteItem(index);
            // setFields(false);
            // setAlertStatus('success');
        } catch (e) {
            console.error(e);
        }
    };
    return (
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
                                                <div class="absolute inset-0 shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p class="font-semibold">{item?.title}</p>
                                                <p class="text-xs text-gray-600 dark:text-gray-400">{item?.category}</p>
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
                                                    class="flex items-center hover:bg-green-100 hover:rounded-full hover:text-primary justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                                class="flex items-center hover:bg-green-100 hover:rounded-full hover:text-primary justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                aria-label="Delete"
                                                onClick={() => deleteBtn_OCIT(index, item?.title)}
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
    );
}

export default Product_OCIT;
