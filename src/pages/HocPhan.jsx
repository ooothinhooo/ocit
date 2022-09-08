import React from 'react';
import CT242 from '../HocPhan/CT242';
import { hocphan } from '../utils/hocphan';
const HocPhan = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap h-screen w-full">
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        {hocphan &&
                            hocphan.map((item, index) => (
                                <>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                                                openTab === item?.uid
                                                    ? 'text-white bg-cardNumBg'
                                                    : 'text-white bg-cardOverlay'
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(item.uid);
                                            }}
                                            data-toggle="tab"
                                            href={`#link${item.uid}`}
                                            role="tablist"
                                        >
                                            {item.id} - {item.name}
                                        </a>
                                    </li>
                                </>
                            ))}

                        {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 2 ? 'text-white bg-cardNumBg' : 'text-white bg-cardOverlay')
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Settings
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                                    (openTab === 3 ? 'text-white bg-cardNumBg' : 'text-white bg-cardOverlay')
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Options
                            </a>
                        </li> */}
                    </ul>
                    <div className=" relative flex flex-col min-w-0 break-words bg-primary text-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {hocphan.map((item, index) => (
                                    <>
                                        <div
                                            className={openTab === item.uid ? 'block' : 'hidden'}
                                            id={`link${item.uid}`}
                                        >
                                            <p>{item.name}</p>
                                            {item.code}
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HocPhan;
