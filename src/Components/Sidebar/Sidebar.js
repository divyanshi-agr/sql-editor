import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Dialog from "./../Dialog/Dialog";

function Sidebar({ data, setData, selectedItem, setSelectedItem }) {
  const [openDialog, setOpenDialog] = useState(false);

  const addDatabase = () => {
    setOpenDialog(true);
  };

  const handleDBName = (e, tabVal, dbVal) => {
    setSelectedItem((selectedItem) => ({
      db: dbVal,
      table: tabVal,
    }));
  };

  const handleTableName = (e, tabVal, dbVal) => {
    setSelectedItem((selectedItem) => ({
      db: dbVal,
      table: tabVal,
    }));
  };

  return (
    <div className="sidebar">
      <p className="db_button" onClick={addDatabase}>
        + New Database
      </p>

      {data.map((db, i) => {
        return (
          <div className="sidebar__tree">
            <p
              className="clickableItem"
              onClick={(e) => handleDBName(e, db.tables[0], db.db_name)}
            >
              {i + 1}. {db.db_name}
            </p>
            <div className="sidebar__subtree">
              {db["tables"] &&
                db["tables"].map((table, i) => {
                  return (
                    <p
                      className="clickableItem"
                      onClick={(e) => handleTableName(e, table, db.db_name)}
                    >
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
