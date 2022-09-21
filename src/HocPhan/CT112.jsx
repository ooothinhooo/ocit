import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Text,
    Code,
    aside,
    note,
    pre,
    ul,
    ol,
    info,
    warning,
    success,
    danger,
    create,
} from '../styles-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Buffer } from 'buffer';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { AccordionContainer } from '../components';
function CT112() {
    const [markDown, setMarkdown] = useState();
    // const markdown = contents.toString();
    const [content, setContent] = useState('');
    const [contentTab1, setContentTab1] = useState('');
    const [contentTab2, setContentTab2] = useState('');
    const [contentTab3, setContentTab3] = useState('');
    const [contentTab4, setContentTab4] = useState('');
    const [contentTab5, setContentTab5] = useState('');
    const [contentTab6, setContentTab6] = useState('');
    const [contentTab7, setContentTab7] = useState('');
    const [contentTab8, setContentTab8] = useState('');
    const [openTab, setOpenTab] = React.useState(3);
    var link = './data/MarkDown/CT112/';
    let tab1 = link + 'C1_TongQuan.md';
    let tab2 = link + 'C2_ThanhPhanMMT.md';
    let tab3 = link + 'C3_TangVatLy.md';
    let tab4 = link + 'C4_TangLienKet.md';
    let tab5 = link + 'C5_MangNoiBo.md';
    let tab6 = link + 'C6_TangMang.md';
    let tab7 = link + 'C7_TangVanChuyen.md';
    let tab8 = link + 'C8_CacUngDung.md';
    useEffect(() => {
        fetch(tab3)
            .then((res) => res.text())
            .then((text) => setContentTab3(text));

        fetch(tab1)
            .then((res) => res.text())
            .then((text) => setContentTab1(text));

        fetch(tab2)
            .then((res) => res.text())
            .then((text) => setContentTab2(text));
        fetch(tab4)
            .then((res) => res.text())
            .then((text) => setContentTab4(text));
        fetch(tab5)
            .then((res) => res.text())
            .then((text) => setContentTab5(text));
        fetch(tab6)
            .then((res) => res.text())
            .then((text) => setContentTab6(text));
        fetch(tab7)
            .then((res) => res.text())
            .then((text) => setContentTab7(text));
        fetch(tab8)
            .then((res) => res.text())
            .then((text) => setContentTab8(text));
    }, []);
    const tab = [
        {
            id: 1,
            title: 'Tổng Quan',
            link: contentTab1,
        },
        {
            id: 2,
            title: 'Các Thành Phần MMT',
            link: contentTab2,
            // desc: <AccordionContainer items={items} />,
        },
        {
            id: 3,
            title: 'Tầng Vật Lý',
            link: contentTab3,
        },
        {
            id: 4,
            title: 'Tâng liên kết dữ liệu',
            link: contentTab4,
        },
        {
            title: 'Mạng nội bộ và Lớp con điều khiển truy nhập',
            id: 5,
            link: contentTab5,
        },
        { title: 'Tầng mạng', id: 6, link: contentTab6 },
        { title: 'Tầng vận chuyển', id: 7, link: contentTab7 },
        { title: 'Các ứng dụng mạng', id: 8, link: contentTab8 },
    ];

    return (
        <>
            <div className="flex flex-wrap bg-primary">
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
                                        {item.title}
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
                                                <div className="text-white">
                                                    <Markdown
                                                        options={{
                                                            overrides: {
                                                                h1: { component: H1 },
                                                                h2: { component: H2 },
                                                                h3: { component: H3 },
                                                                h4: { component: H4 },
                                                                h5: { component: H5 },
                                                                h6: { component: H6 },
                                                                Text: { component: Text },
                                                                Code: { component: Code },
                                                                aside: { component: aside },
                                                                note: { component: note },
                                                                pre: { component: pre },
                                                                info: { component: info },
                                                                danger: { component: danger },
                                                                success: { component: success },
                                                                warning: { component: warning },
                                                                create: { component: create },
                                                                ul: { component: ul },
                                                                ol: { component: ol },
                                                            },
                                                        }}
                                                    >
                                                        {item.link}
                                                    </Markdown>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: '<script>alert(document.cookie);</script>',
                                                        }}
                                                    />
                                                </div>
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

export default CT112;
