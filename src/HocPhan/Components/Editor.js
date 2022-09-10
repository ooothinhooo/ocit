import React from 'react';
import ReactMarkdown from 'react-markdown';

const Editor = (props) => {
    return (
        <div>
            <textarea
                name="editor"
                rows="30"
                cols="80"
                id="editor"
                defaultValue={props.editorText}
                placeholder="Enter some text to make markdown"
                onChange={props.onChange}
            />
        </div>
    );
};
export default Editor;
