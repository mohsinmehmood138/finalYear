import React from "react";
import "./styles.css";
import SignupImage from "../../../assets/images/signup-image.png";
import AppHeader from "../../../component/ui/AppHeader";

const Signup = () => {
  return (
    <>
      <AppHeader />
      <main className="signup-main-container">
        <div className="signup-split">
          <div className="signup-left">
            <img src={SignupImage} alt="signup" className="signup-image" />
          </div>

          <div className="signup-right">
            <div className="form-wrapper">
              <h2>Create your account</h2>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    id="signupName"
                    placeholder="Full name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    id="signupEmail"
                    placeholder="Email address"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    className="form-input"
                    id="signupPhone"
                    placeholder="Phone number"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    id="signupPassword"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    id="signupConfirmPassword"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="form-options">
                  <div className="remember-me">
                    <input
                      type="checkbox"
                      id="terms"
                      className="checkbox-input"
                    />
                    <label htmlFor="terms">I agree to the Terms and Privacy Policy</label>
                  </div>
                </div>

                <button type="submit" className="submit-form-button submit-button ">
                  Create Account
                </button>

                <p className="login-text">
                  Already have an account? <a href="/login">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;