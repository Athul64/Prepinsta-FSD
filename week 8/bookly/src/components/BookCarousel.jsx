// src/components/BookCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Book data
const booksData = [
  { id: 1,cover: "/dune.jpg" },
  { id: 2, cover: "/twilight.jpg" },
  { id: 2, cover: "/it end.jpg" },
];

const BookCarousel = () => {
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
    <Slider {...settings}>
      {booksData.map((book) => (
        <div key={book.id} className="carousel-item">
          <img src={book.cover}/>
          <div className="carousel-overlay">
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BookCarousel;
