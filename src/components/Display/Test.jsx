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
} from '../../styles-components';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { FacebookProvider, CommentsCount, Page } from 'react-facebook';
import { authentication } from '../../firebase.config';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { app } from '../../firebase.config.js';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import AccordionContainer from '../children/AccordionContainer';
function Test() {
    const [contentTab1, setContentTab1] = useState('');
    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
    let tab1 = './contents.md';
    useEffect(() => {
        fetch(tab1)
            .then((res) => res.text())
            .then((text) => setContentTab1(text));
    }, []);

    const items = [
        {
            uuid: 1,
            heading: 'Heading 1',
            content:
                'Chương 6: Tầng mạng Chương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạng',
        },
        {
            uuid: 2,
            heading: 'Heading 1',
            content:
                'Chương 6: Tầng mạng Chương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạngChương 6: Tầng mạng',
        },
    ];
    return (
        <div className="">
            <h1>Test Page</h1>
            <AccordionContainer items={items} />
            <>
                {/*             
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
                    {contentTab1}
                   
                </Markdown>
                <div
                    dangerouslySetInnerHTML={{
                        __html: '<script>alert(document.cookie);</script>',
                    }}
                />
            </div> */}
            </>
        </div>
    );
}

export default Test;
