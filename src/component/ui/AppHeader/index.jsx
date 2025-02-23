import React from "react";
import "./styles.css";
import AppLogo from "../AppLogo";
import "../../../utils/helper/commonStyle.css";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-anchor-tag">

        <AppLogo />
        </a>
      </div>

      <div className="auth-buttons">
        <button className="login-btn button-text" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="signup-btn button-text" onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </header>
  );
};

export default AppHeader;


