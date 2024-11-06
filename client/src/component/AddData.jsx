import React from "react";
import { useState } from "react";
import axios from "axios";
import ItemContext from '../context/ItemContext'
import { useContext } from "react";
import {toast} from 'react-toastify'


const AddData = () => {
  const [data, setData] = useState({ title: "", content: "" });

  const {item,fetchData}= useContext(ItemContext)
  

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAddData = async (e) => {
    try{
      e.preventDefault();
      const response= await axios.post('https://task35-black.vercel.app/blog',{title:data.title, content:data.content, userId:item})
      fetchData() 
      if(response.data.success){
       toast.success(response.data.message)
      }
      setData({title:"", content:""})

    }
    catch{
      toast.error('something wrong')
    }
   

  };

  
  return (
    <div className="addDataDiv">

      <form className="addForm"  onSubmit={handleAddData}>
        <input
          type="text"
          onChange={handleOnChange}
          name="title"
          value={data.title}
          placeholder="title"
          required
        />

        <input
          type="text"
          onChange={handleOnChange}
          name="content"
          value={data.content}
          placeholder="content"
          required
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddData;
