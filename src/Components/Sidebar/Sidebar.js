import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <p
        style={{
          color: "#8E8E8E",
        }}
      >
        + New Database
      </p>

      <div
        className="sidebar__tree"
        style={{
          fontSize: "13px",
        }}
      >
        <ol>
          <li>
            Database 1
            <ol>
              <li>Table 1</li>
              <li>Table 2</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Sidebar;
