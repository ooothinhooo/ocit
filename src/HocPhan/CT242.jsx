import React, { useState, useEffect } from 'react';
import { MarkDownContainer, CartNameHP } from '../components';
function CT242() {
    const [contentTab1, setContentTab1] = useState('');
    const [contentTab2, setContentTab2] = useState('');
    const [contentTab3, setContentTab3] = useState('');
    const [contentTab4, setContentTab4] = useState('');
    const [contentTab5, setContentTab5] = useState('');
    const [contentTab6, setContentTab6] = useState('');
    const [contentTab7, setContentTab7] = useState('');
    const [contentTab8, setContentTab8] = useState('');
    const [contentTab9, setContentTab9] = useState('');
    const [contentTab10, setContentTab10] = useState('');
    const [openTab, setOpenTab] = React.useState(6);
    let tab5 = '../../data/MarkDown/CT242/Theory/B5.md';
    let tab6 = '../../data/MarkDown/CT242/Theory/B6.md';
    let tab7 = '../../data/MarkDown/CT242/Theory/B7.md';
    let tab8 = '../../data/MarkDown/CT242/Theory/B8.md';
    let tab9 = '../../data/MarkDown/CT242/Theory/B9.md';
    let tab10 = '../../data/MarkDown/CT242/Theory/B10.md';

    useEffect(() => {
        fetch(tab5)
            .then((res) => res.text())
            .then((text) => setContentTab5(text));

        fetch(tab6)
            .then((res) => res.text())
            .then((text) => setContentTab6(text));
    }, []);

    const tab = [
        // {
        //     id: 1,
        //     link: contentTab1,
        // },
        // {
        //     id: 2,
        //     link: contentTab2,
        // },
        // {
        //     id: 3,
        //     link: contentTab3,
        // },
        // {
        //     id: 4,
        //     link: contentTab4,
        // },
        {
            id: 5,
            link: contentTab5,
        },
        {
            id: 6,
            link: contentTab6,
        },
        {
            id: 7,
            link: contentTab7,
        },
        {
            id: 8,
            link: contentTab8,
        },
        {
            id: 9,
            link: contentTab9,
        },
    ];

    return (
        <>
            <div className="flex flex-wrap bg-primary -mt-12">
                <CartNameHP
                    link="http://www.cit.ctu.edu.vn/decuong/CT242.pdf"
                    id="CT242"
                    name="Kiến Trúc Và Thiết Kế Phần Mềm"
                />
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        {tab &&
                            tab.map((item, index) => (
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mx-1 my-1 ' +
                                            (openTab === item.id ? 'text-white bg-red-600' : 'text-red-600 bg-white')
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(item.id);
                                        }}
                                        data-toggle="tab"
                                        href={`#link${item.id}`}
                                        role="tablist"
                                    >
                                        Buổi {item.id}
                                    </a>
                                </li>
                            ))}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-primary w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {tab &&
                                    tab.map((item, index) => (
                                        <>
                                            <div
                                                className={openTab === item.id ? 'block' : 'hidden'}
                                                id={`link${item.id}`}
                                            >
                                                <MarkDownContainer data={item.link} />
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
}

export default CT242;
