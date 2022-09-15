import React from 'react';
import { Link } from 'react-router-dom';
function Unfinished({ data }) {
    return (
        <>
            <section class=" flex items-center h-screen justify-center bg-primary">
                <div class="mx-auto max-w-[43rem]">
                    <div class="text-center">
                        <p class="text-lg font-medium leading-8 text-indigo-600/95">OCIT Rất Tiếc</p>
                        <h1 class="mt-3 text-[2.5rem] font-bold leading-[4rem] tracking-tight text-white">
                            HỌC PHẦN <p>{data}</p> CHƯA ĐƯỢC CẬP NHẬT
                        </h1>
                        <p class="mt-3 text-lg leading-relaxed text-slate-400">
                            Vui Lòng Quay Lại Sau! Chúng Tôi Sẽ Cố Hoàn Thành Nó
                        </p>
                    </div>

                    <div class="mt-6 flex items-center justify-center gap-4">
                        <Link
                            to="/"
                            href="#"
                            class="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
                        >
                            Trang Chủ
                        </Link>
                        <Link
                            to="/hocphan"
                            href="#"
                            class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50"
                        >
                            Học Phần
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Unfinished;
