import React from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Ensure you're accessing cartItems here
  const navigate = useNavigate();

  // Function to handle removing items
  const handleRemove = (id) => {
    removeFromCart(id);
    alert('Item removed from cart!');
    if (cartItems.length === 1) {
      navigate('/'); // Redirect to Home if last item is removed
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-description">{item.description}</p>
                <div className="cart-item-actions">
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                    <i className="fa fa-trash"></i> 
                  </button>
                  <Link to="/contact" className="btn buy-now-btn">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
