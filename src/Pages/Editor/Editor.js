import React, { useState } from "react";
import "./Editor.css";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import Table from "./../../Components/Table/Table";
import Dialog from "./../../Components/Dialog/Dialog";

function Editor() {
  const tempData = [
    {
      db_name: "Sample Database",
      tables: ["Table 1", "Table 2", "Table 3"],
    },
    {
      db_name: "Employee",
      tables: ["Department", "Salary", "Manager"],
    },
  ];
  const [data, setData] = useState(tempData);
  const [openDialog, setOpenDialog] = useState(false);

  const addTable = () => {
    setOpenDialog(true);
  };

  return (
    <div className="editor">
      <Sidebar data={data} setData={setData} />

      <div className="editor__right">
        <div className="editor__top">
          <div className="editor__topHeader">
            <p style={{ color: "#BFBFBF" }}>
              Database &nbsp; &gt; &nbsp;{" "}
              <span className="tabname">Employee</span>
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
                <span className="tabname">Department</span>
              </p>
            </div>

            <Table />
          </div>
        </div>
      </div>

      <Dialog open={openDialog} setOpen={setOpenDialog} type="table" />
    </div>
  );
}

export default Editor;
