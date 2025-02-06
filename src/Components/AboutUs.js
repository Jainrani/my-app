import React from 'react';
import './AboutUs.css'; // Assuming you'll add the required styles in this file

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h3>WELCOME TO DHARAMGADH BABA KISAN PRODUCER COMPANY</h3>
        <p>Your trusted partner for high-quality agricultural Products.</p>
      </div>

      {/* Product Offerings Section */}
      <div className="content-section">
        <div className="card">
        <div className="card-text">
        <h2>Our Products</h2>
          <div className="card-img">
           
            <img src="images/products.jpg" alt="Our Products" />
            <p>
              From fresh seeds to organic oils, animal feed, and mixed flours, we bring you a wide range of high-quality agricultural products directly from farms to your home.
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Sustainability Practices Section */}
      <div className="content-section ">
        <div className="card">
        <div className="card-text">
        <h2>Meet the Farmers</h2>
          <div className="card-img">
            <img src="images/farmers1.jpg" alt="Sustainability Practices" />
          </div>
         
            <p>
            Our farmers are the backbone of our mission. With years of experience and dedication, they ensure every product meets the highest quality standards while embracing sustainable practices.
         </p> </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="content-section">
        <div className="card">
          <div className="card-img">
            <img src="images/tractor.jpg" alt="Customer Testimonials" />
          </div>
          <div className="card-text">
            <h2> Our Farming </h2>
            <p>
              "The quality of the seeds is exceptional, and I’ve seen amazing results in my crops. I trust this company for all my farming needs!"
            </p>
          </div>
        </div>
      </div>
      {/* Vision, Mission & Values Section */}
      <section className="section bg-light border-top">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 mb-4">
              <h3 className="main-heading">Vision, Mission, and Values</h3>
              <div className="underline mx-auto"></div>
            </div>

            {/* Vision */}
            <div className="col-md-4">
              <h6>Our Vision</h6>
              <p>
                Our vision is to become a global leader in providing sustainable, high-quality seeds and agricultural products 
                that contribute to the well-being of farmers, gardeners, and the environment. 
                We strive to empower individuals and communities by promoting healthy and efficient farming practices.
              </p>
            </div>

            {/* Mission */}
            <div className="col-md-4">
              <h6>Our Mission</h6>
              <p>
                Our mission is to provide farmers and gardeners with the finest seeds, ensuring their success 
                and contribution to a sustainable agricultural ecosystem.
              </p>
            </div>

            {/* Values */}
            <div className="col-md-4">
              <h6>Our Values</h6>
              <p>
                We are committed to eco-friendly practices and ensure our products contribute to a sustainable farming environment. 
                Our goal is to build lasting relationships with our customers, ensuring they receive the support and products they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
