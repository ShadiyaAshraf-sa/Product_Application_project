import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import AddProductModal from "../components/AddProductModal";
import AddCategoryModal from "../components/AddCategoryModal";
import AddSubCategoryModal from "../components/AddSubCategoryModal"; // NEW
import "./HomePage.css";

const HomePage = () => {
  const [isAddProductOpen, setAddProductOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false); // NEW
  const [isSubCategoryModalOpen, setSubCategoryModalOpen] = useState(false); // NEW

  const dummyProducts = Array(10).fill({
    name: "HP AMD Ryzen 3",
    price: "529.99",
    imageUrl: "https://via.placeholder.com/150",
  });

  const handleAddCategory = (categoryName) => {
    console.log("New category added:", categoryName);
    // Add API call or logic to save category
  };

  const handleAddSubCategory = (category, subCategoryName) => {
    console.log("New sub-category:", subCategoryName, "under", category);
    // Add API call or logic to save sub-category
  };

  return (
    <div className="home-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <div className="toolbar" style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
            <button className="btn" onClick={() => setCategoryModalOpen(true)}>Add category</button>
            <button className="btn" onClick={() => setSubCategoryModalOpen(true)}>Add sub category</button>
            <button className="btn" onClick={() => setAddProductOpen(true)}>Add product</button>
          </div>

          <ProductGrid products={dummyProducts} />
          <Pagination />
        </div>
      </div>

      {/* Product Modal */}
      <AddProductModal
        isOpen={isAddProductOpen}
        onClose={() => setAddProductOpen(false)}
      />

      {/* Category Modal */}
      {isCategoryModalOpen && (
        <AddCategoryModal
          onClose={() => setCategoryModalOpen(false)}
          onSubmit={handleAddCategory}
        />
      )}

      {/* Sub Category Modal */}
      {isSubCategoryModalOpen && (
        <AddSubCategoryModal
          onClose={() => setSubCategoryModalOpen(false)}
          onSubmit={handleAddSubCategory}
        />
      )}
    </div>
  );
};

export default HomePage;
