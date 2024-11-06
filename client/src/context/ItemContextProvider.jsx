import React from "react";
import itemContext from "./ItemContext";
import { useState } from "react";
import axios from "axios";

const ItemContextProvider = ({ children }) => {
  const [item, setItem] = useState("");
 

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://task35-black.vercel.app/display");
    setData(response.data.data); 
    console.log(response.data.data)
  };
  

  return( <itemContext.Provider value={{item, setItem, fetchData, data}}>
                {children}
           </itemContext.Provider>
           )
};

export default ItemContextProvider;
