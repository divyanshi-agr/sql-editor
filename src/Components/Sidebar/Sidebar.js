import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <p
        style={{
          color: "#8E8E8E",
          marginBottom: "35px",
          fontSize: "14px",
        }}
      >
        + New Database
      </p>

      <div className="sidebar__tree">
        <p>1. Sample Database</p>
        <div className="sidebar__subtree">
          <p>1. Table 1</p>
          <p>2. Table 2</p>
          <p>3. Table 3</p>
        </div>
      </div>

      <div className="sidebar__tree">
        <p>1. Database 1</p>
        <div className="sidebar__subtree">
          <p>1. Table 1</p>
          <p>2. Table 2</p>
          <p>3. Table 3</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
