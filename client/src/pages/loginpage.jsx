
import React from "react";
import "./loginpage.css";
import LoginForm from "../components/loginform";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); 

  const goToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Sign In to Your Account</h2>
        <LoginForm />
      </div>
      <div className="login-right">
        <h2>Hello Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
       <button className="signup-btn" onClick={goToSignup}>SIGN UP</button>

      </div>
    </div>
  );
};

export default LoginPage;
