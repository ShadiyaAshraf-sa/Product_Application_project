import React, { useState } from 'react';
import './AddCategoryModal.css';

const AddCategoryModal = ({ onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = () => {
    if (categoryName.trim()) {
      onSubmit(categoryName);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2>Add Category</h2>
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="add-btn" onClick={handleSubmit}>ADD</button>
          <button className="discard-btn" onClick={onClose}>DISCARD</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
