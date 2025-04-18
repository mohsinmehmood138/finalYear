import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../../component/ui/AppHeader";
import LoginImage from "../../../assets/images/login-image.png";

const Login = ()=> {
  const navigate = useNavigate();
 
  
  return (
    <>
      <AppHeader />
      <main className="login-main-container">
        <div className="login-split">
          <div className="login-left">
            <img src={LoginImage} alt="login" className="login-image" />
          </div>

          <div className="login-right">
            <div className="form-wrapper">
              <h2>Sign in to your account</h2>

              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    id="loginEmail"
                    placeholder="Email address"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    id="loginPassword"
                    placeholder="Password"
                  />
                </div>

                <div className="form-options">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="remember"
                      className="checkbox-input"
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a href="#" className="forgot-link">
                    Forgot password?
                  </a>
                </div>

                <button type="submit" className="submit-button submit-form-button" onClick={() => navigate("/dashboard")}>
                  Sign in
                </button>

                {/* <p className="signup-text">
                  Don't have an account? <a href="/signup">Sign up</a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
