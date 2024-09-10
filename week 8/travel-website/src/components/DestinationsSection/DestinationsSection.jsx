import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationsSection.css';
import destinationsData from '../data/Data.json'; // Importing the data

const DestinationsSection = () => {
  return (
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-grid">
        {destinationsData.map((dest, index) => (
          <div key={index} className="destination-card">
            <img src={dest.img} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
            {/* Link to the details page */}
            <Link to={`/destination/${index}`}>Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
