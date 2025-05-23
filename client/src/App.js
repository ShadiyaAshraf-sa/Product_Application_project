import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/signuppage";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
