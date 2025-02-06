import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css"; // Create a separate CSS file for styling

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      review: "The quality of the seeds is excellent! My crop yield has improved significantly.",
      
    },
    {
      id: 2,
      name: "Priya Patel",
      review: "Highly recommend! The oil quality is top-notch and organic.",
      
    },
    {
      id: 3,
      name: "Amit Verma",
      review: "Fast delivery and amazing customer support. Will order again!",
      
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-container">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="review-slider">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">     
              <h3 className="review-name">{review.name}</h3>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
