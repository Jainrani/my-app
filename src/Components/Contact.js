import React, { useState } from "react";
import "./Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Message
    const whatsappMessage = `Hello, my name is ${formData.name}. 
Email: ${formData.email}, 
Phone: ${formData.phone}, 
Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/918957652758?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      {/* Contact Form */}
      <div className="form-container">
        
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
      {/* Call Us Section */}
      <div className="infoSection">
        <h2>Call Us</h2>
        <p>
          Electronic not your thing? We are available for you on phone too! Give
          us a call at:
        </p>
        <p><strong>+91 8957652758</strong></p>
        <p>Available: Monday - Friday, 11:00 AM - 4:00 PM</p>
        <p>
          You can also reach us after working hours via email:
          <strong> dharamgarhseeds@gmail.com</strong>
        </p>
      </div>

      {/* Bulk Orders Section */}
      <div className="infoSection">
        <h2>For Bulk Orders</h2>
        <p>
          For bulk order inquiries call us on:
        </p>
        <p><strong>+91 9369152532</strong></p>
        <p>Available: Monday - Friday, 11:00 AM - 4:00 PM</p>
        <p>
          Or write to us at: <strong>dharamgarhseeds@gmail.com</strong>
        </p>
      </div>

      {/* Operative Address */}
      <div className="infoSection">
        <h2>Our Operative Address</h2>
        <p>
        Office 1: Mankapur, Mangalpur, Kanpur Dehat</p>      
         <p> Office 2: Mahendra Nagar, Rasulabad
        </p>
      </div>
    </div>
  );
};

export default Contact;
