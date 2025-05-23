import React from "react";


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="stars">★★★★★</div>
    </div>
  );
};

export default ProductCard;
