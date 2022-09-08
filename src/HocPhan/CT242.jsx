import React from 'react';
// import { HPCT242 } from '../utils/hocphan';
function CT242() {
    const [openTab, setOpenTab] = React.useState(1);
    const HPCT242 = [
        {
            uid: 4,
            title: 'Buổi 4',
            html: 'https://ct242.notion.site/ct242/CT242-55eafd20008247f586778cb18999ea3e',
        },
        {
            uid: 5,
            html: 'https://ct242.notion.site/ct242/Ki-n-Tr-c-Thi-t-K-Ph-n-M-m-55eafd20008247f586778cb18999ea3e',
            title: 'Buổi 5',
        },
        {
            uid: 6,
            html: 'https://data-ocit.vercel.app/html/CT296/CT296-PTTKHTTT.html',
            title: 'Buổi 6',
        },
    ];
    return (
        <div className="w-full h-full ">
            {/* <div className="flex flex-wrap h-screen">
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        {HPCT242 &&
                            HPCT242.map((item, index) => (
                                <>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                                                openTab === item?.uid
                                                    ? 'text-white bg-cardNumBg'
                                                    : 'text-white bg-blue-300'
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(item.uid);
                                            }}
                                            data-toggle="tab"
                                            href={`#link${item.uid}`}
                                            role="tablist"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                </>
                            ))}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-blue-100 text-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {HPCT242.map((item, index) => (
                                    <>
                                        <div
                                            className={openTab === item.uid ? 'block' : 'hidden'}
                                            id={`link${item.uid}`}
                                        >
                                            <div id="style-4">
                                                {' '}
                                                <iframe
                                                    src={item.html}
                                                    className="w-full h-screen  md:aspect-square "
                                                ></iframe>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <iframe
                src="https://data-ocit.vercel.app/html/CT242/CT242.html"
                className="w-full h-screen  md:aspect-square bg-gray-300 "
            ></iframe>
        </div>
    );
}

export default CT242;
