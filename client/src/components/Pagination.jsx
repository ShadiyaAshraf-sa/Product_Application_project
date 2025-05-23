import React from "react";


const Pagination = () => {
  return (
    <div className="footer-controls">
      <span>10 of 456 items</span>
      <div className="pagination">
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num}>{num}</button>
        ))}
      </div>
      <div className="rows-select">
        <span>Show</span>
        <select>
          <option>10 rows</option>
          <option>20 rows</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
