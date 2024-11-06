import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import itemContext from "../context/ItemContext";

const ShowData = () => {

  const {fetchData, data}= useContext(itemContext)
  console.log(data)
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="showDataDiv">
      <table className="data-table">
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}> 
                <td>{value.title}</td>
                <td>{value.content}</td>
                <td>{value.userId.name}</td> 
                <td>{value.userId.email}</td> 
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
