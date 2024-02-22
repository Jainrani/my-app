import React from 'react';
import Header from './Components/header/Header';
import Main from './Components/main/main';
import Footer from './Components/footer/footer';
import Navbar from './Components/Navbar/Navbar';
import Categories from './Components/categories/categories';
import Carousel from './Components/carousel/carousel';







export default function App() {
  return <div>
      <Header/>
      <Navbar/>
      <Categories/>
      {/* <Carousel/> */}
      <Main/>
      <Footer/>
       </div>
  
}
