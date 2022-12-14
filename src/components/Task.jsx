import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useStateValue } from '../context/StateProvider';

function Task() {
    const [{ user, OCIT_HOCPHAN }, dispatch] = useStateValue();
    

    return (
        <>
            <div
                className=" grid md:grid-cols-3 md:gap-3 w-full  h-full bg-primary md:-mx-[18px] "
                // :className="{ 'overflow-hidden': isSideMenuOpen}"
            >
                {OCIT_HOCPHAN &&
                    OCIT_HOCPHAN.map((item) => (
                        <div class="md:w-[80%] m-2 w-[90%]   ">
                            <div
                                className={`bg-gray-800 text-white   rounded-xl  shadow-lg p-4  ${
                                    item.flag == 'true' ? 'border border-blue-200' : ''
                                }`}
                            >
                                <div class="flex items-center justify-between ">
                                    <div class="flex items-center space-x-2">
                                        <div class="text-sm text-gray-600">{item?.MaHP}</div>
                                        <div class="md:text-md text-sm md:font-bold">{item?.TenHP}</div>
                                    </div>

                                    <div class="flex items-center space-x-4">
                                        <div class="cursor-pointer">
                                            <img class="w-5 h-5 rounded-lg" src={item?.imgCreator} />
                                        </div>
                                        <div className="">
                                            <CopyToClipboard
                                                text={`ocit.cf${item.link}`}
                                                onCopy={() => this.setState({ copied: true })}
                                            >
                                                <div
                                                    data-tip="Copy Link"
                                                    className="tooltip  text-gray-500 hover:text-gray-300 cursor-pointer"
                                                >
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
                                            </CopyToClipboard>
                                        </div>
                                        <Link to={`/hocphan${item.link}`}>
                                            <div
                                                data-tip="View"
                                                class="tooltip text-gray-500 hover:text-gray-300 cursor-pointer"
                                            >
                                                <svg
                                                    class="md:h-6 md:w-6"
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
                                <Link to={`/hocphan${item.link}`}>
                                    <div class=" py-3 mt-4  text-gray-500 md:font-bold text-sm">
                                        <p class="float-left">#{item.category}</p>
                                        <p class="float-right">{item.flag == 'true' ? <>???? c??</> : <>Ch??a c??</>}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
            <div class="h-[200px]"></div>
        </>
    );
}

export default Task;
