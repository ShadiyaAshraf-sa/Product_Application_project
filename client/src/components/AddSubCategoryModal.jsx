import React, { useState } from "react";
import "./Modal.css"; // You can reuse styles across modals

const AddSubCategoryModal = ({ onClose, onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  const handleSubmit = () => {
    if (selectedCategory && subCategoryName) {
      onSubmit(selectedCategory, subCategoryName);
      onClose();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Add Sub Category</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="modal-input"
        >
          <option value="">Select category</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
          <option value="headphones">Headphones</option>
          {/* In real use: Map dynamic categories here */}
        </select>

        <input
          type="text"
          placeholder="Enter sub category name"
          value={subCategoryName}
          onChange={(e) => setSubCategoryName(e.target.value)}
          className="modal-input"
        />

        <div className="modal-buttons">
          <button className="add-button" onClick={handleSubmit}>ADD</button>
          <button className="discard-button" onClick={onClose}>DISCARD</button>
        </div>
      </div>
    </div>
  );
};

export default AddSubCategoryModal;
