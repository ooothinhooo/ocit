import React from 'react';
import { categories } from '../utils/data';

function ChildrenMenu({ filter }) {
    return (
        <div>
            {' '}
            {(() => {
                switch (filter) {
                    case 'CT178':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[0].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT449':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[1].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT180':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[2].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT188':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[3].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT239':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[4].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT223':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[5].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT240':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[6].title}</span>
                                </div>
                            </div>
                        );
                    case 'CT241':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[7].title}</span>
                                </div>
                            </div>
                        );
                        // case categories[8].urlParamName:
                        //     return (
                        //         <div
                        //             class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                        //             role="alert"
                        //         >
                        //             <svg
                        //                 aria-hidden="true"
                        //                 class="flex-shrink-0 inline w-5 h-5 mr-3"
                        //                 fill="currentColor"
                        //                 viewBox="0 0 20 20"
                        //                 xmlns="http://www.w3.org/2000/svg"
                        //             >
                        //                 <path
                        //                     fill-rule="evenodd"
                        //                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        //                     clip-rule="evenodd"
                        //                 ></path>
                        //             </svg>
                        //             <span class="sr-only">Info</span>
                        //             <div>
                        //                 <span class="font-medium">{categories[8].title}</span>
                        //             </div>
                        //         </div>
                        //     );
                        // case 'CT449':
                        //     return (
                        //         <div
                        //             class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                        //             role="alert"
                        //         >
                        //             <svg
                        //                 aria-hidden="true"
                        //                 class="flex-shrink-0 inline w-5 h-5 mr-3"
                        //                 fill="currentColor"
                        //                 viewBox="0 0 20 20"
                        //                 xmlns="http://www.w3.org/2000/svg"
                        //             >
                        //                 <path
                        //                     fill-rule="evenodd"
                        //                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        //                     clip-rule="evenodd"
                        //                 ></path>
                        //             </svg>
                        //             <span class="sr-only">Info</span>
                        //             <div>
                        //                 <span class="font-medium">{categories[6].title}</span>
                        //             </div>
                        //         </div>
                        //     );
                        // case 'CT449':
                        //     return (
                        //         <div
                        //             class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                        //             role="alert"
                        //         >
                        //             <svg
                        //                 aria-hidden="true"
                        //                 class="flex-shrink-0 inline w-5 h-5 mr-3"
                        //                 fill="currentColor"
                        //                 viewBox="0 0 20 20"
                        //                 xmlns="http://www.w3.org/2000/svg"
                        //             >
                        //                 <path
                        //                     fill-rule="evenodd"
                        //                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        //                     clip-rule="evenodd"
                        //                 ></path>
                        //             </svg>
                        //             <span class="sr-only">Info</span>
                        //             <div>
                        //                 <span class="font-medium">{categories[6].title}</span>
                        //             </div>
                        //         </div>
                        //     );
                        // case 'CT449':
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">{categories[6].title}</span>
                                </div>
                            </div>
                        );
                    default:
                        return (
                            <div
                                class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                                role="alert"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span class="sr-only">Info</span>
                                <div>
                                    <span class="font-medium">Dữ Liệu Chưa Được Cập Nhật</span>
                                </div>
                            </div>
                        );
                }
            })()}
        </div>
    );
}

export default ChildrenMenu;
