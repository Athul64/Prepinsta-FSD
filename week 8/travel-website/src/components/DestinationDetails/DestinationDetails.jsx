import React from 'react';
import { useParams } from 'react-router-dom'; 
import './DestinationDetails.css';
import destinationsData from '../data/Data.json'; // Import the destination data

const DestinationDetails = () => {
  const { id } = useParams(); // Get the destination ID from the URL
  const destination = destinationsData[id]; // Use the ID to get the corresponding destination

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <section className="destination-details">
      <div className="image-container">
        <img src={destination.img} alt={destination.name} />
        <div className="overlay">
          <h2>{destination.name}</h2>
        </div>
      </div>
      <p>{destination.details}</p>
    </section>
  );
};

export default DestinationDetails;
