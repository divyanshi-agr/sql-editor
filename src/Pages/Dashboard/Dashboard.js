import React, { useState, useEffect } from "react";
import Sidebar from "./../../Components/Sidebar/Sidebar";
import Editor from "./../Editor/Editor";
import "./Dashboard.css";

function Dashboard() {
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
  const [selectedItem, setSelectedItem] = useState({
    db: data[0].db_name,
    table: data[0].tables[0],
  });

  return (
    <div className="dashboard">
      <Sidebar
        data={data}
        setData={setData}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Editor
        data={data}
        setData={setData}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}

export default Dashboard;
