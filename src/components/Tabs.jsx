import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
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
export default function Example() {
    const [contentTab1, setContentTab1] = useState('');
    const [contentTab2, setContentTab2] = useState('');
    const [contentTab3, setContentTab3] = useState('');
    const [contentTab4, setContentTab4] = useState('');

    let tab1 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';
    let tab2 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';
    let tab3 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';
    let tab4 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';

    const data = [
        {
            label: 'DFD',
            value: '1',
            desc: contentTab1,
        },
        {
            label: 'DFD',
            value: '2',
            desc: contentTab2,
        },
        {
            label: 'DFD',
            value: '3',
            desc: contentTab3,
        },
        {
            label: 'DFD',
            value: '4',
            desc: contentTab4,
        },
    ];

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
    }, []);
    return (
        <Tabs id="custom-animation" value="html">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab className="bg-cardOverlay" key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                className="bg-primary"
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
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
                                {desc}
                            </Markdown>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: '<script>alert(document.cookie);</script>',
                                }}
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
