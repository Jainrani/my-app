import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faFacebook } from '@fortawesome/free-brands-svg-icons';  

const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>DHARAMGADH BABA KISAN PRODUCER COMPANY LIMITED</h3>
          <div className="footer-info">
            <div className="footer-info-item">
              <img src="/images/email-icon.png" alt="Email" className="footer-icon" />
              <a href="mailto:dharamgarhseeds@gmail.com">dharamgarhseeds@gmail.com</a>
            </div>
            <div className="footer-info-item">
              <img src="/images/phone-icon.png" alt="Phone" className="footer-icon" />
              <span>9369152532, 9936945031</span>
            </div>
            <div className="footer-info-item">
              <img src="/images/location-icon.png" alt="Location" className="footer-icon" />
              <span>Office 1: Mankapur, Mangalpur, Kanpur Dehat</span>
            </div>
            <div className="footer-info-item">
              <img src="/images/location-icon.png" alt="Location" className="footer-icon" />
              <span>Office 2: Mahendra Nagar, Rasulabad</span>
            </div>
            
          </div>
        </div>
        
        <div className="footer-right">
          <h4>Follow Us</h4>
          <ul className="social-icons-right">
            <li><a href="https://www.facebook.com/share/1Kw5uG12xg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" />  </a></li>
            {/* Add more social links as needed */}
          </ul>
         
        </div>
       
      
      </div>
      
      <div className="footer-bottom">
      <p>&copy; 2025 Dharamgadh Baba Kisan Producer Company Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



