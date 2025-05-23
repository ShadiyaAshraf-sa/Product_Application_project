import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import "./HomePage.css";

const HomePage = () => {
  const dummyProducts = Array(10).fill({
    name: "HP AMD Ryzen 3",
    price: "529.99",
    imageUrl: "https://via.placeholder.com/150",
  });

  return (
    <div className="home-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <div className="toolbar">
            <button>Add category</button>
            <button>Add sub category</button>
            <button>Add product</button>
          </div>
          <ProductGrid products={dummyProducts} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
