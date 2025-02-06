import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        
        <div className="product-actions">
          <button 
            className="add-to-cart-button" 
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
          <button 
            className="buy-now-button" 
            onClick={() => onBuyNow(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
