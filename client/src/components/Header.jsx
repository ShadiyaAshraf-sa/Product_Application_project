import React from "react";

import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">Home</div>
      <div className="search-actions">
        <input type="text" placeholder="Search any things" />
        <button className="search-btn">Search</button>
         <button onClick={() => navigate("/login")}>Sign in</button>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;
