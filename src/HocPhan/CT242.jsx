import React from 'react';

function CT242() {
   
    return (
        <div className="w-full h-full ">
            <div className="text-md text-white">
                Hoặc truy cập tại{' '}
                <a
                    href="https://hocphan-ocit.vercel.app/src/html/CT242/CT242.html"
                    className="text-blue-500"
                    target="_blank"
                >
                    Get
                </a>
            </div>
            <iframe
                src="https://hocphan-ocit.vercel.app/src/html/CT242/CT242.html"
                className="w-full h-screen  md:aspect-square bg-gray-300 "
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default CT242;
