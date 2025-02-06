

import React, { useState } from "react";  
import { Link } from "react-router-dom";  
import "./Home.css";  
import Review from "./Reviews";  

const categories = [  
  { id: 1, name: "Wheat Seeds", img: "/images/wheat.jpg" },  
  { id: 2, name: "Mustard Oil", img: "/images/oill.jpg" },  
  { id: 3, name: "Animal Feed", img: "/images/banner3.jpg" },  
  { id: 4, name: "Wheat Flour", img: "/images/wheat flour.jpg" },  
  { id: 5, name: "Fertilizer Urea/DAP", img: "/images/urea.jpg" },  
];  

const Home = () => {  
  const [isReadMore1, setIsReadMore1] = useState(false);  
  const [isReadMore2, setIsReadMore2] = useState(false);  

  const handleToggle1 = () => {  
    setIsReadMore1(!isReadMore1);  
  };  

  const handleToggle2 = () => {  
    setIsReadMore2(!isReadMore2);  
  };  

  return (  
    <div className="home-container">  
    <h1>Welcome to Our Store</h1>  
  
    {/* Product Categories */}  
    <div className="categories-container">
      <h2>Product Categories</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.img} alt={category.name} className="category-img" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>

  

        <div className="center-btn-container">  
          <Link to="/Products" className="btn btn-warning shadow">  
            Explore All Items  
          </Link>  
        </div>  
      </div>  
      {/* Bulk Seeds Section */}
      <section className="section bulk-seeds-section">
        <div className="container">  
          <div className="row">  
            <div className="col-md-12 text-center">  
              <h3 className="main-heading">Bulk Seeds</h3>  
              <div className="underline mx-auto"></div>  
              <p >  
              Are you looking for a seeds wholesaler for your business? Then you’re in the right place. 
          As a wholesale supplier, we offer a wide variety of organic seeds for you to choose from. 
          Originating from across the globe, we offer everything from wheat, paddy, urad and moong seeds 
         and Mustard seeds and everything in between. 
          You can check out our full range of seeds.
              </p>  
              
              <Link to="/bulk-seeds" className="btn btn-warning shadow">  
                Explore Our Seeds  
              </Link>  
            </div>  
          </div>  
        </div>
      
      </section>
      {/* About Company Section */}  
      <section className="section about-section">  
        <div className="container">  
          <div className="row">  
            <div className="col-md-12 text-center">  
              <h3 className="main-heading">Our Company</h3>  
              <div className="underline mx-auto"></div>  
              <p>  
                Welcome to <b>Dharamgadh Baba Kisan Producer Company</b> — your  
                trusted partner in providing high-quality seeds and sustainable  
                agricultural solutions. We are passionate about helping  
                farmers, gardeners, and nature enthusiasts grow their dreams,  
                one seed at a time.  
              </p>  
              <Link to="/about" className="btn btn-warning shadow">  
                Read More  
              </Link>  
            </div>  
          </div>  
        </div>  
      </section>  

      <div className="chief-container">  
        {/* Chairman's Message Card 1 */}  
        <div className="chairman-card">  
          <img src="/images/darector.jpg" alt="Chairman 1" className="chairman-image" />  
          <div className="message-container">  
            <h2>FORMER DIRECTOR MESSAGE</h2>  
            <p>  
              {isReadMore1  
                ? `Our beloved Director, a guiding light, mentor, and champion of farmers, is no longer with us. His wisdom, teachings, and unwavering dedication to the farming community will always remain in our hearts. Though he may have left us physically, his blessings, memories, and lessons continue to inspire us each day. His vision has shaped our path, and we are committed to carrying forward his legacy with honor and pride. We pray to God that his soul may rest in peace.`  
                : 'Our beloved Director, a guiding light, mentor, and champion of farmers, is no longer with us...'}  
            </p>  
            <button onClick={handleToggle1} className="read-more-button">  
              {isReadMore1 ? 'Read Less' : 'Read More'}  
            </button>  
          </div>  
        </div>  

        {/* Chairman's Message Card 2 */}  
        <div className="chairman-card">  
          <img src="/images/chief darector.jpg" alt="Chairman 2" className="chairman-image" />  
          <div className="message-container">  
            <h2>OUR DIRECTOR MESSAGE</h2>  
            <p>  
              {isReadMore2  
                ? `Our mission is to support farmers by providing high-quality seeds and reliable products. We believe that empowered farmers are the backbone of a prosperous nation. By working together, we aim to enhance agricultural productivity, promote organic seeds, and ensure food security for our country. Our range of products is crafted to meet the needs of every farmer, helping them achieve better yields and greater success. Let us continue to grow together, hand in hand, toward a brighter future for agriculture and our nation. "Together, we sow the seeds of progress."`  
                : 'Our mission is to support farmers by providing high-quality seeds and reliable products...'}  
            </p>  
            <button onClick={handleToggle2} className="read-more-button">  
              {isReadMore2 ? 'Read Less' : 'Read More'}  
            </button>  
          </div>  
        </div>  
      </div>  

      {/* Reviews Section */}  
      <Review />  
    </div>  
  );  
};  

export default Home;
