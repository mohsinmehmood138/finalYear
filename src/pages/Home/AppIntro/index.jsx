import React from "react";
import "./styles.css";
import "../../../utils/helper/commonStyle.css";
import AppHeader from "../../../component/ui/AppHeader";
import IntroImage from "../../../assets/images/app-intro-image.png";
import { useNavigate } from "react-router-dom";


const AppIntro = () => {
  const navigate = useNavigate();
  return (
    <main className="intro_container">
      <AppHeader />
      <div className="main-container">
        <div className="intro-content">
          <h2 className="intro-heading-text">
             If You are Admin then Click Here
          </h2>
          <p className="intro-content-desc">
            Whether you're seeking to enhance your team's capabilities, solve
            complex challenges, or embark on ground-breaking research
            endeavours, Syncs is your trusted partner every step of the way.
            Join us in unlocking limitless possibilities and accelerating your
            journey to success.
          </p>
          <button className="intro-button button-text" onClick={()=>{
           navigate("/login")
            }}>Get Started</button>
        </div>
        <div className="intro-image-container">
          <img src={IntroImage} className="intro-image" />
        </div>
      </div>
    </main>
  );
};

export default AppIntro;
