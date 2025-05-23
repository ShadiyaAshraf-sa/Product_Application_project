import React from "react";
import "./signuppage.css";
import AuthForm from "../components/signupform";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate(); // initialize the hook

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <button className="auth-btn" onClick={goToLogin}>SIGN IN</button>
      </div>
      <div className="auth-right">
        <h2>Create Account</h2>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
