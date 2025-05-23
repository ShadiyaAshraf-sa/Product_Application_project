// src/components/AddProductModal.jsx
import React from "react";
import "./AddProductModal.css";

const AddProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2>Add Product</h2>

        <label>Title:</label>
        <input type="text" placeholder="Product name" />

        <label>Variants:</label>
        <div className="variant-row">
          <span>Ram:</span>
          <input type="text" placeholder="4 GB" />
          <span>Price:</span>
          <input type="text" placeholder="$529.99" />
          <span>Qty:</span>
          <input type="number" placeholder="1" />
        </div>

        <div className="variant-row">
          <span>Ram:</span>
          <input type="text" placeholder="8 GB" />
          <span>Price:</span>
          <input type="text" placeholder="$929.99" />
          <span>Qty:</span>
          <input type="number" placeholder="3" />
        </div>

        <label>Sub category:</label>
        <select>
          <option>HP</option>
          <option>Dell</option>
        </select>

        <label>Description:</label>
        <textarea placeholder="Product description..." />

        <label>Upload image:</label>
        <input type="file" multiple />

        <div className="modal-buttons">
          <button className="add-btn">ADD</button>
          <button className="discard-btn" onClick={onClose}>DISCARD</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
