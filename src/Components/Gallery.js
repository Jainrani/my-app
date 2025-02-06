import React from "react";
import "./Gallery.css";

const bulkProducts = [
  {id: 0, img:"/images/logo2.jpg"},
  { id: 1,  img: "/images/p1.jpg" },
  { id: 2,  img: "/images/p2.jpg" },
  { id: 3,  img: "/images/Cow.jpg" },
  { id: 4,  img: "/images/p3.jpg" },
  { id: 5,  img: "/images/p4.jpg" },
  { id: 6,  img: "/images/p5.jpg" },
  { id: 7,  img: "/images/p6.jpg" },
  { id: 8,  img: "/images/p7.jpg" },
  { id: 9,  img: "/images/p8.jpg" },
  { id: 11, img: "/images/p10.jpg" },
  { id: 12, img: "/images/p11.jpg" },
  { id: 13, img: "/images/seeds.png" },
  { id: 14, img: "/images/farmers.jpg" },
  { id: 15, img: "/images/p12.jpg"},
  { id: 16, img: "/images/p13.jpg"},
  { id: 17, img: "/images/p14.jpg"},
  { id: 18, img: "/images/p15.jpg"},
  { id: 19, img: "/images/p16.jpg"},
  { id: 20, img: "/images/a8.jpg"},
  { id: 21, img: "/images/p18.jpg"},
  { id: 22, img: "/images/p19.jpg"},
  { id: 23, img: "/images/p20.jpg"},
  { id: 24, img: "/images/p21.jpg"},
  { id: 25, img: "/images/p22.jpg"},
  { id: 26, img: "/images/p23.jpg"},
  { id: 27, img: "/images/p24.jpg"},
  { id: 28, img: "/images/p25.jpg"},
  { id: 29, img: "/images/p26.jpg"},
  { id: 30, img: "/images/p27.jpg"},
  { id: 31, img: "/images/a1.jpg"},
  { id: 32, img: "/images/p29.jpg"},
  { id: 33, img: "/images/p30.jpg"},
  { id: 34, img: "/images/a2.jpg"},
  { id: 35, img: "/images/a3.jpg"},
  { id: 36, img: "/images/a4.jpg"},
  { id: 37, img: "/images/a5.jpg"},
  { id: 38, img: "/images/a6.jpg"},
  { id: 39, img: "/images/a7.jpg"},
  
  


  
  
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>OUR GALLERY</h2>
        <h1>Checkout Our Photo Gallery</h1>
      </div>
      <div className="gallery-grid">
        {bulkProducts.map((product) => (
          <div key={product.id} className="gallery-item">
            <img src={product.img} alt={product.name} />
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
