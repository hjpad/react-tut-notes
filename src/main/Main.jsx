import React from "react";
import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {

  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      // [field]: value,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const onEditField2 = (field, value) => {
    const d = new Date(); 
    let myvar = setInterval(onEditField("body",d.toLocaleTimeString()),1000);
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        {/* <div contentEditable="true"
          id="body"
          onBlur={(e) => onEditField("body", e.target.innerHTML)}
          >
            {activeNote.body}
          </div> */}
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
