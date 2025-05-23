import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${index}`); 
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
