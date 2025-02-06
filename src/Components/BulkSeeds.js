import React from "react";
import { useNavigate } from "react-router-dom";
import "./BulkSeeds.css";

const BulkSeeds = () => {
    const navigate = useNavigate();

    return (
        <div className="bulk-seeds-container">
        <h1 className="bulk-seeds-header">SEEDS</h1>
        <p className="bulk-seeds-description">
          Are you looking for a seeds wholesaler for your business? Then you’re in the right place. 
          As a wholesale supplier, we offer a wide variety of organic seeds for you to choose from. 
          Originating from across the globe, we offer everything from chia, flax, and poppy seeds 
          to sesame and sunflower seeds and everything in between. 
          You can check out our full range of seeds.
        </p>
        

           {/* Product Images */}
<h3>Our Bulk Seed Collection</h3>
<div className="bulk-products">
  <div className="product">
    <img src="images/p1.jpg" alt="Wheat Seeds" />
    <h4>Wheat Seeds</h4>
  </div>
  <div className="product">
    <img src="images/p2.jpg" alt="Sunflower Seeds" />
    <h4> Seeds</h4>
  </div>
  <div className="product">
    <img src="images/p3.jpg" alt="Rice Seeds" />
    <h4>Rice Seeds</h4>
  </div>
</div>

            {/* Contact Button */}
            <button className="contact-btn" onClick={() => navigate("/contact")}>
                Contact Us for Bulk Orders
            </button>
        </div>
    );
};

export default BulkSeeds;
