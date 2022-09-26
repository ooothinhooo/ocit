import React, { useState, useEffect } from 'react';
import { MarkDownContainer, CartNameHP } from '../components';
import { Unfinished } from '../components';

function CT180() {
    const [contentTab1, setContentTab1] = useState('');
    const [contentTab2, setContentTab2] = useState('');
    const [contentTab3, setContentTab3] = useState('');
    const [contentTab4, setContentTab4] = useState('');
    const [contentTab5, setContentTab5] = useState('');

    const [openTab, setOpenTab] = React.useState(1);
    var link = '../../data/MarkDown/CT180';
    let tab1 = link + '/Lab1.md';
    let tab3 = link + '/Lab2.md';
    let tab4 = link + '/Lab3.md';
    let tab5 = link + '/Lab4.md';
    let tab2 = link + '/Lab5.md';

    useEffect(() => {
        fetch(tab1)
            .then((res) => res.text())
            .then((text) => setContentTab1(text));

        fetch(tab2)
            .then((res) => res.text())
            .then((text) => setContentTab2(text));
        fetch(tab3)
            .then((res) => res.text())
            .then((text) => setContentTab3(text));

        fetch(tab4)
            .then((res) => res.text())
            .then((text) => setContentTab4(text));
        fetch(tab5)
            .then((res) => res.text())
            .then((text) => setContentTab5(text));
    }, []);

    const tab = [
        {
            id: 1,
            link: contentTab1,
        },
        {
            id: 2,
            link: contentTab2,
        },
        {
            id: 3,
            link: contentTab3,
        },
        {
            id: 4,
            link: contentTab4,
        },
        {
            id: 5,
            link: contentTab5,
        },
    ];
    return (
        <div>
            {/* <Unfinished data="CT180 - Cơ Sở Dữ Liệu" /> */}
            <>
                <div className="flex flex-wrap bg-primary -mt-12">
                    <CartNameHP link="http://www.cit.ctu.edu.vn/decuong/CT180.pdf" id="CT180" name="Cơ Sở Dữ Liệu" />
                    <div className="w-full">
                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                            {tab &&
                                tab.map((item, index) => (
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mx-1 my-1 ' +
                                                (openTab === item.id
                                                    ? 'text-white bg-red-600'
                                                    : 'text-red-600 bg-white')
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(item.id);
                                            }}
                                            data-toggle="tab"
                                            href={`#link${item.id}`}
                                            role="tablist"
                                        >
                                            Lab {item.id}
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
        </div>
    );
}

export default CT180;
