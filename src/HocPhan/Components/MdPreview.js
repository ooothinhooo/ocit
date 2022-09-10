import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const MdPreview = (props) => {
    return (
        <div id="preview">
            <ReactMarkdown plugins={[gfm]} children={props.mdText} />
        </div>
    );
};
export default MdPreview;
