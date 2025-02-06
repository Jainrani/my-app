import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaTimes, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div>
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="menu-btn">
        {isOpen ? <FaTimes size={24} /> : <span>☰</span>}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        
        <ul className="menu">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li>
                     <Link to="/bulk-seeds" onClick={() => setIsOpen(false)}>Bulk Seeds</Link>
                   </li>
                   <li>
                     <Link to="/gallery" onClick={() => setIsOpen(false)}>Media Gallery</Link>
                   </li>
                   <li>
                     <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                   </li>
                   <li>
                     <Link to="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link>
                   </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
        </ul>

        <div className="contact-info">
          <p><FaPhoneAlt /> Call Now: +91-8957652758</p>
          <p><FaEnvelope /> Send Email: dharamgarhseeds@gmail.com</p>
          <p><FaMapMarkerAlt /> Address: Mankapur, Mangalpur, Kanpur Dehat</p>
        </div>

        <div className="social-icons">
          <Link to="https://www.facebook.com/share/1Kw5uG12xg/" target="_blank">
            <FiFacebook style={{ fontSize: '24px' }} />
          </Link>
          <Link to="https://www.instagram.com" target="_blank">
            <FiInstagram style={{ fontSize: '24px' }}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
