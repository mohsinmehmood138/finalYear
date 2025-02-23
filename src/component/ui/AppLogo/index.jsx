import React from "react";
import logo from "../../../assets/images/logo2.png";
import "./styles.css";

const AppLogo = () => {
  return (
    <div className="app-logo">
      <div>
        <img src={logo} alt="App Logo" className="logo-image" />
      </div>
      <div className="text-container">
        <h5 className="logo-text-style">
          UOE<span className="logo-span">Vehari</span>
        </h5>
        <h6 className="logo-text-style web-portal-text">Online Web Portal</h6>
      </div>
    </div>
  );
};

export default AppLogo;
