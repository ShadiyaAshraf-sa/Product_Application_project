import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
const ProductDetails = () => {
  const { id } = useParams();

  // Dummy product data (replace with real API or context later)
  const dummyProducts = Array(10).fill({
    name: "HP AMD Ryzen 3",
    price: "529.99",
    imageUrl: "https://via.placeholder.com/150",
    availability: "In stock",
    ramOptions: ["4 GB", "8 GB", "16 GB"],
  });

  const product = dummyProducts[id];

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>Availability: ✅ {product.availability}</p>

      <div>
        <strong>Ram:</strong>
        {product.ramOptions.map((ram, idx) => (
          <button key={idx}>{ram}</button>
        ))}
      </div>

      <div>
        <strong>Quantity:</strong>
        <button>-</button> <span>1</span> <button>+</button>
      </div>

      <button>Edit Product</button>
      <button>Buy it now</button>
    </div>
  );
};

export default ProductDetails;
