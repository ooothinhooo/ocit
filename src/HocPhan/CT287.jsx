import React, { useState, useEffect } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { MarkDownContainer, CartNameHP } from '../components';

function CT287() {
    const [contentTab1, setContentTab1] = useState('');
    const [contentTab2, setContentTab2] = useState('');
    const [contentTab3, setContentTab3] = useState('');
    const [contentTab4, setContentTab4] = useState('');

    let tab1 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';
    let tab2 = './data/MarkDown/CT287/Practice/NFA.md';
    let tab3 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';
    let tab4 = './data/MarkDown/CT287/Practice/Deterministic_Finite_Automata.md';

    const data = [
        {
            label: 'DFA - Deterministic Finite Automata',
            value: '1',
            desc: contentTab1,
        },
        {
            label: 'NFAs - Nondeterministic Finite Automaton',
            value: '2',
            desc: contentTab2,
        },
        // {
        //     label: 'Null',
        //     value: '3',
        //     desc: contentTab3,
        // },
        // {
        //     label: 'Null',
        //     value: '4',
        //     desc: contentTab4,
        // },
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
        <div className="w-full h-full -mt-12 ">
            <CartNameHP link="http://www.cit.ctu.edu.vn/decuong/CT287.pdf" id="CT287" name="Kiểm Chứng Mô Hình" />
            <Tabs id="custom-animation" value="1">
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
                            <MarkDownContainer data={desc} />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}

export default CT287;
