import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <a href="#" className="logo"><i className="fas fa-hiking"></i> travel.</a>
      <nav className="navbar">
        <div id="nav-close" className="fas fa-times"></div>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/destinations" className={location.pathname === '/destinations' ? 'active' : ''}>Destinations</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
