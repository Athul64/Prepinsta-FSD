import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HeroSection.css'; // For styling

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const destination = () => {
    navigate('/destinations'); // Corrected: Navigate to /destinations when button is clicked
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>WELCOME TO <br /> <span>PARADISE</span></h1>
        <button className="hero-button" onClick={destination}>
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
