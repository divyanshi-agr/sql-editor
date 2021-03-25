import React from "react";
import "./Table.css";

function Table() {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Dept_ID</th>
          <th>Dept_Name</th>
          <th>Dept_Manager</th>
          <th>Location</th>
          <th>No_Of_Emps</th>
        </tr>
        <tr>
          <td>1001</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>47</td>
        </tr>
        <tr>
          <td>1002</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>Germany</td>
          <td>400</td>
        </tr>
        <tr>
          <td>1003</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Germany</td>
          <td>80</td>
        </tr>
        <tr>
          <td>1004</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Germany</td>
          <td>80</td>
        </tr>
        <tr>
          <td>1005</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Germany</td>
          <td>80</td>
        </tr>
        <tr>
          <td>1006</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Germany</td>
          <td>80</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
