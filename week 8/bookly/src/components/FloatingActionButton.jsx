import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleFabClick = () => {
    navigate("/add-book"); // Navigates to the add-book page
  };

  return (
    <button className="fab" onClick={handleFabClick}>
      +
    </button>
  );
};

export default FloatingActionButton;
