import React from 'react'
import './carousel.css'

export default function carousel() {
  return<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    
    

    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/banner1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.581b17e36e7d3e3e0a755212a99a7126?rik=aQnOl3LUtuCTHg&riu=http%3a%2f%2fsdenterprise.net.in%2fimg%2fbanner.jpg&ehk=Eet4i%2b0vy7W4pEoQ7Px0pYNJcs%2bjOxtKPM%2b1jM6tkNM%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/banner2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/banner3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/banner4.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    
      </div>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
}          
