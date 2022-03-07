import React from "react";
import ReactDOM from "react-dom";
import "./index.css";



//react router setup
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import App from "./App";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import Course from "./pages/course/Course";
import Dashboard from "./pages/admin/dashboard/Dashboard";





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="auth/login" element={<Login/>}/>
      <Route path="auth/register" element={<Register/>}/>
      <Route path="courses/:id" element={<Course/>}/>
      <Route path="admin/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
