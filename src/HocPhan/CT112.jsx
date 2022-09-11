import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { H1, H2, H3, H4, H5, Text, Code, aside, note, pre } from '../styles-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Buffer } from 'buffer';
import contents from './contents.md';
function CT112() {
    const [markDown, setMarkdown] = useState();
    const markdown = contents.toString();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('./data/MarkDown/CT112/C3_TangVatLy.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);
    return (
        <div className="w-full h-full ">
            <div className="text-white">
                <Markdown
                    options={{
                        overrides: {
                            h1: { component: H1 },
                            h2: { component: H2 },
                            h3: { component: H3 },
                            h4: { component: H4 },
                            h5: { component: H5 },
                            Text: { component: Text },
                            Code: { component: Code },
                            aside: { component: aside },
                            note: { component: note },
                            pre: { component: pre },
                        },
                    }}
                >
                    {/* {markdown} */}
                    {content}
                </Markdown>
                <div
                    dangerouslySetInnerHTML={{
                        __html: '<script>alert(document.cookie);</script>',
                    }}
                />
            </div>
        </div>
    );
}

export default CT112;
