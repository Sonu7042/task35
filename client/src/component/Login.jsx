import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import itemContext from "../context/ItemContext";
import { useContext } from "react";

const Login = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const {setItem}= useContext(itemContext)



  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:9000/user", user);
      setItem(response.data.data._id);
      
    
      if (response.data.success) {
        toast.success(response.data.message); 
        navigate("/");
      }
    } catch {
      toast.error("something wrong");
    }
  };


  
    

  return (
    <div className="loginForm">
      <h1>Login</h1>

      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          onChange={handleOnChange}
          name="name"
          value={user.name}
          placeholder="name"
          required
        />

        <input
          type="email"
          onChange={handleOnChange}
          name="email"
          value={user.email}
          placeholder="email"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
