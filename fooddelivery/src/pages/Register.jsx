import React from "react";
import "./Register.css";
import Aurora from "./Aurora";

const Register = () => {
  return (
    <div className="register-wrapper">
      <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      <div className="register-container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-header text-center bg-danger text-white">
                <h3>Register</h3>
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
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-danger w-100">
                    Register
                  </button>
                </form>
              </div>
              <div className="card-footer text-center">
                <small>
                  Already have an account?{" "}
                  <a href="/login" className="text-danger">
                    Login
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
