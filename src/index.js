import { useState } from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";
import marked from "marked";
import Prism from "prismjs";
const defaultContent = `


# Hello, 
## You'r welcome at
### freeCodecamp Coding challenge using react


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My Linkin Profile](https://www.linkedin.com/in/irshad-alam-khan-517631252/)

> Block Quot

1. First list item
2. Second list item
`;
const Editor = ({ content, HandleTextarea }) => (
  <textarea id="editor" value={content} onChange={HandleTextarea} />
);
const Preview = ({ content }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked.parse(content, { renderer: renderer })
    }}
  />
);

marked.setOptions({
  break: true,
  highlight: (code) => {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  }
});
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href=${href}>${text}</a>`;
};

function TextAreaPanal() {
  const [content, setText] = useState(defaultContent);

  function HandleTextarea(e) {
    setText(e.target.value);
  }
  return (
    <div className="main">
      <Editor
        className="editor"
        content={content}
        HandleTextarea={HandleTextarea}
      />
      <Preview className="preview" content={content} />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<TextAreaPanal />);
