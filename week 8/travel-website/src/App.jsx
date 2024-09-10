import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DestinationsSection from './components/DestinationsSection/DestinationsSection';
import DestinationDetails from './components/DestinationDetails/DestinationDetails'; // Destination details page
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HeroSection />} />
          
          {/* Destinations List */}
          <Route path="/destinations" element={<DestinationsSection />} />
          
          {/* Destination Details */}
          <Route path="/destination/:id" element={<DestinationDetails />} />
          {/* Contact Page */}
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
