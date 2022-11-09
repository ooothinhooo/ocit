import React from 'react';

function BannerLuanVan() {
    return (
        <div>
            <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
                <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div class="flex flex-col md:flex-row items-strech justify-between rounded-lg shadow-xl bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-6 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                        <div class="flex flex-col justify-center md:w-1/2">
                            <h1 class="text-3xl lg:text-4xl font-semibold text-blue-800 dark:text-white">
                                Hỗ Trợ Chỉnh Sửa
                            </h1>
                            <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
                                {' '}
                                <span class="font-bold">Luận Văn, Báo Cáo, Niên Luận, Tiểu Luận</span>
                            </p>
                        </div>
                        <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end  h-[200px] md:h-[240px] lg:h-[240px]  ">
                            <img
                                src="https://i.ibb.co/ygKXLPL/luu-tru-hoa-don-dien-tu-removebg-preview.png"
                                alt=""
                                class="h-full w-auto"
                            />
                        </div>
                    </div>
                    <div class=" rounded-3xl md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                        <div class="flex flex-col justify-center">
                            <h1 class="text-3xl lg:text-4xl font-semibold text-green-600 dark:text-white">
                                Nhanh Chóng
                            </h1>
                            <h2 class="text-2xl lg:text-3xl font-semibold text-blue-800 dark:text-white">Chính Xác</h2>
                            <h3 class="text-1xl lg:text-2xl font-semibold text-red-600 dark:text-white">Tiện Lợi</h3>
                            {/* <p class="text-base lg:text-xl text-gray-800 dark:text-white">
                                Tiện Lợi<span class="font-bold"></span>
                            </p> */}
                        </div>
                        <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerLuanVan;
