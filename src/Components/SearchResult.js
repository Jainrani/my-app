import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "./Products.json"; // Ensure correct path

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q") || "";

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery]);

  return (
    <div className="container">
      <h2>Search Results for: "{searchQuery}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => navigate(`/product/${product.name}`)} // Navigate using name
              style={{ cursor: "pointer" }}
            >
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResult;
