import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppIntro from "../pages/Home/AppIntro";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import DashboardLayoutBasic from "../pages/dashBoard/Admin/DashBoard";



const AppNavigation = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<AppIntro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/dashboard' element={<DashboardLayoutBasic/>}/>
      
      </Routes>
    </Router>
  );
};

export default AppNavigation;
