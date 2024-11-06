import React from "react";
import "./App.css";
import Login from "./component/Login";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemContextProvider from "./context/ItemContextProvider";
import Header from "./component/Header";

const App = () => {
  return (
    <ItemContextProvider>
      <BrowserRouter>
        <Header />
        <div className="main">
          <ToastContainer autoClose={1000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ItemContextProvider>
  );
};

export default App;
