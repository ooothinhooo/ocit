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