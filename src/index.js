import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


// carousel
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css"; 



//react router setup
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import App from "./App";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Navbar from "./components/navbar/Navbar";





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="auth/login" element={<Login/>}/>
      <Route path="auth/Register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
