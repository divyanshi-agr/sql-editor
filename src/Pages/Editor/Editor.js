import React, { useState } from "react";
import "./Editor.css";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import Table from "./../../Components/Table/Table";
import Dialog from "./../../Components/Dialog/Dialog";

function Editor({ data, setData, selectedItem, setSelectedItem }) {
  const [openDialog, setOpenDialog] = useState(false);

  const addTable = () => {
    setOpenDialog(true);
  };

  const { db, table } = selectedItem;
  return (
    <div className="editor">
      <div className="editor__right">
        <div className="editor__top">
          <div className="editor__topHeader">
            <p style={{ color: "#BFBFBF" }}>
              Database &nbsp; &gt; &nbsp; <span className="tabname">{db}</span>
            </p>
            <p className="table_button" onClick={addTable}>
              + New Table
            </p>
          </div>

          <input type="text"></input>
        </div>

        <div className="editor__bottom">
          <div className="editor__bottomTable">
            <div className="editor__topHeader">
              <p style={{ color: "#BFBFBF" }}>
                Table &nbsp; &gt; &nbsp;{" "}
                <span className="tabname">{table}</span>
              </p>
            </div>

            <Table />
          </div>
        </div>
      </div>

      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        data={data}
        setData={setData}
        selectedDb={db}
        type="table"
      />
    </div>
  );
}

export default Editor;
