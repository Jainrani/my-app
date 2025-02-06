// import React, { useState, useEffect } from "react";
// import { useCart } from "./CartContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import Products from "./Products.json"; // Ensure correct path
// import "./ProductsPage.css";

// const ProductsPage = () => {
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useCart();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extract search query from URL
//   const searchParams = new URLSearchParams(location.search);
//   const searchQuery = searchParams.get("search")?.toLowerCase() || "";

//   // State for filtered products
//   const [filteredProducts, setFilteredProducts] = useState(Products);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       const results = Products.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery)
//       );
//       setFilteredProducts(results);
//     } else {
//       setFilteredProducts(Products);
//     }
//   }, [searchQuery]);

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     alert(`${product.name} added to cart!`);
//     navigate("/cart");
//   };

//   return (
//     <div className="products-container">
//       <h2>Our Products</h2>
//       {searchQuery && (
//         <p>Showing results for: <strong>{searchQuery}</strong></p>
//       )}
//       <div className="products-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="product-card">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 onError={(e) => (e.target.src = "/images/placeholder.jpg")}
//               />
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <div className="button-group">
//                 <button
//                   className="btn add-to-cart-btn"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//                 <button
//                   className="btn buy-now-btn"
//                   onClick={() => navigate("/contact")}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import Products from "./Products.json"; // Ensure correct path
import "./ProductsPage.css";

const ProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState({}); // Track expanded descriptions

  // Extract search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(Products);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const results = Products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(Products);
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
    navigate("/cart");
  };

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle state
    }));
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      {searchQuery && (
        <p>Showing results for: <strong>{searchQuery}</strong></p>
      )}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.img}
                alt={product.name}
                onError={(e) => (e.target.src = "/images/placeholder.jpg")}
              />
              <h3>{product.name}</h3>
              <p>{product.variety}</p>
              
              <p>
                {expanded[product.id]
                  ? product.description
                  : `${product.description.substring(0, 100)}...`}
              </p>

              <button 
                className="read-more-btn" 
                onClick={() => toggleReadMore(product.id)}
              >
                {expanded[product.id] ? "Show Less" : "Read More"}
              </button>

              <div className="button-group">
                <button
                  className="btn add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn buy-now-btn"
                  onClick={() => navigate("/contact")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
