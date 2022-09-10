import React from 'react';
import Editor from './Editor';
import MdPreview from './MdPreview';
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!



Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.

`;
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: placeholder,
        };
    }
    handleChange = (e) => {
        this.setState({ ...this.state, text: e.target.value });
    };
    render() {
        return (
            <div>
                <hr />
                <h1>Markdown Editor</h1>
                <hr />
                <Editor editorText={this.state.text} onChange={this.handleChange} />
                <hr />
                <h1>Markdown Preview</h1>
                <hr />
                <MdPreview mdText={this.state.text} />
            </div>
        );
    }
}

export default Container;
