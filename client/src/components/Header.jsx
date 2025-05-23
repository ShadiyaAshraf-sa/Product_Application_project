import React from "react";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Home</div>
      <div className="search-actions">
        <input type="text" placeholder="Search any things" />
        <button className="search-btn">Search</button>
        <button>Sign in</button>
        <button>Cart</button>
      </div>
    </header>
  );
};

export default Header;
