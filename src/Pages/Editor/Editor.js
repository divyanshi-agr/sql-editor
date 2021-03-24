import React from "react";
import "./Editor.css";
import Sidebar from "./../../Components/Sidebar/Sidebar";

function Editor() {
  return (
    <div className="editor">
      <Sidebar />

      <div className="editor__right">
        <div className="editor__top">
          <p>
            Database &gt; <span>Employee</span>{" "}
          </p>
          <p>+ New Table</p>
        </div>

        <div className="editor__table">
          <h3>Editor table area</h3>
        </div>
      </div>
    </div>
  );
}

export default Editor;
