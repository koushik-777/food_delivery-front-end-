import React from "react";
import "./Login.css";
import Aurora from "./Aurora";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login successful:", response);
    // Handle the response from Google login here
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
    // Handle the error from Google login here
  };

  return (
    <GoogleOAuthProvider clientId="94334279065-kn2bc32mcgo4s6g2r6knkhf2mmrnse49.apps.googleusercontent.com">
      <div className="login-wrapper">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
        <div className="login-container">
          <div className="card shadow-lg">
            <div className="card-header text-center">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Login
                </button>
              </form>
              <div className="text-center my-3">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginFailure}
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <small>
                Don't have an account?{" "}
                <a href="/register" className="text-danger">
                  Register
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
