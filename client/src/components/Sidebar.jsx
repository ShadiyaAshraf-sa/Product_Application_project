import React from "react";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li>All categories</li>
        <li>
          Laptop
          <ul>
            <li>HP</li>
            <li>Dell</li>
          </ul>
        </li>
        <li>Tablet</li>
        <li>Headphones</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
