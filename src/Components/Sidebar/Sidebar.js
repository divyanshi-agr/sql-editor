import React, { useState } from "react";
import "./Sidebar.css";
import Dialog from "./../Dialog/Dialog";

function Sidebar({ data, setData }) {
  const [openDialog, setOpenDialog] = useState(false);

  const addDatabase = () => {
    setOpenDialog(true);
  };

  return (
    <div className="sidebar">
      <p className="db_button" onClick={addDatabase}>
        + New Database
      </p>

      {data.map((db, i) => {
        return (
          <div className="sidebar__tree">
            <p>
              {i + 1}. {db.db_name}
            </p>
            <div className="sidebar__subtree">
              {db["tables"] &&
                db["tables"].map((table, i) => {
                  return (
                    <p>
                      {i + 1}. {table}
                    </p>
                  );
                })}
            </div>
          </div>
        );
      })}

      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        data={data}
        setData={setData}
        type="db"
      />
    </div>
  );
}

export default Sidebar;
