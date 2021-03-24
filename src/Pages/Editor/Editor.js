import React from "react";
import "./Editor.css";
import Sidebar from "./../../Components/Sidebar/Sidebar";

function Editor() {
  return (
    <div className="editor">
      <Sidebar />

      <div className="editor__right">
        <div className="editor__top">
          <div className="editor__topHeader">
            <p style={{ color: "#BFBFBF" }}>
              Database &nbsp; &gt; &nbsp;{" "}
              <span style={{ color: "#FF4079", fontWeight: "600" }}>
                Employee
              </span>
            </p>
            <p style={{ color: "#8E8E8E" }}>+ New Table</p>
          </div>

          <input type="text"></input>
        </div>

        <div className="editor__bottom">
          <div className="editor__bottomTable">
            <div className="editor__topHeader">
              <p style={{ color: "#BFBFBF" }}>
                Table &nbsp; &gt; &nbsp;{" "}
                <span style={{ color: "#FF4079", fontWeight: "600" }}>
                  Department
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
