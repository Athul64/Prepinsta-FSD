import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [isSticky, setIsSticky] = useState(false); // State to control sticky navbar
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    navigate(`/?search=${e.target.value}`); // Update URL with search query
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);  // Fix the navbar after scrolling 50px down
      } else {
        setIsSticky(false); // Reset when at the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-brand">
        <h1>Bookie..</h1>
      </div>
      <div className="navbar-buttons">
        {location.pathname === "/add-book" && (
          <Link to="/">
            <button className="btn">
              <img src="/home.png" alt="home-icon" style={{ width: "15px", marginRight: "8px" }} />
              Home
            </button>
          </Link>
        )}
        {location.pathname.startsWith("/books/") && (
          <Link to="/">
            <button className="btn">
              <img src="/home.png" alt="home-icon" style={{ width: "15px", marginRight: "8px" }} />
              Home
            </button>
          </Link>
        )}
      </div>
      {/* Only show the search bar on the home page */}
      {location.pathname === "/" && (
        <div className="navbar-search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by book name"
            className="search-input"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
