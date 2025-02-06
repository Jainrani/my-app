import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';
import Carousel from './Components/carousel/carousel';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Login from "./Components/Login";
import './App.css';
import About from './Components/AboutUs';
import BulkSeeds from "./Components/BulkSeeds";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Cart from './Components/Cart'; // Assuming the cart component exists
import ProductsPage from './Components/ProductsPage'; // Component for listing products
import Reviews from "./Components/Reviews";
import Register from './Components/Register';
import Gallery from "./Components/Gallery";
import WhatsAppButton from "./Components/WhatsAppButton";
import SearchResult from "./Components/SearchResult";


const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState();
  

  

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };

  useEffect(() => {
    fetch('/Products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy ${product.name}`);
  };

  return (
    <CartProvider>
      <Router>
      
        <Navbar 
         />
          <Sidebar/>
        <Carousel />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bulk-seeds" element={<BulkSeeds />} />
          <Route path="/products" element={<ProductsPage products={products} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={< Gallery />} />
         <Route path="/reviews" element={<Reviews />} />
         <Route path="/search" element={<SearchResult />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
