import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import "./Navbar.css"; // Ensure you have CSS for styling
import { useCart } from "../CartContext"; // Import useCart hook
import Products from "../Products.json"; // Import product data

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart() || {}; // Use fallback in case CartContext is not available
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle Search Input Change
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchQuery(term);

    if (term === "") {
      setFilteredProducts([]);
    } else {
      const results = Products.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
      setFilteredProducts(results);
    }
  };

  // Handle Product Click (Navigate to Products Page)
  const handleProductClick = (product) => {
    setSearchQuery("");
    setFilteredProducts([]);
    navigate(`/products?search=${product.name}`);
  };

  // Clear Search Input
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" alt="logo" width={100} height={100} />
        </Link>

        {/* Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/bulk-seeds" onClick={() => setIsMenuOpen(false)}>
              Bulk Seeds
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && <button onClick={clearSearch}>❌</button>}
        </div>

        {/* Search Results Dropdown */}
        {searchQuery && (
          <div className="search-results">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="search-item"
                  onClick={() => handleProductClick(product)}
                >
                  <img src={product.image} alt={product.name} width="40" />
                  <span>{product.name}</span>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        )}

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/cart" className="cart-icon-link">
            <i className="fas fa-shopping-cart"></i>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/login">
            <FaUser className="login-icon" />
          </Link>
          <button className="menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
