import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState(""); // Added genre state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(), // Unique ID based on timestamp
      title,
      cover: coverUrl,
      description,
      genre, // Include genre in the new book object
    };

    // Get existing books from local storage
    const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
    // Add new book to existing books
    existingBooks.push(newBook);
    // Save updated books list to local storage
    localStorage.setItem("books", JSON.stringify(existingBooks));

    // Clear form fields
    setTitle("");
    setCoverUrl("");
    setDescription("");
    setGenre(""); // Clear genre field

    // Open success modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/'); // Navigate to home page when closing the modal
  };

  return (
    <div className="wrapperr">
      <div className="form-container">
        <h3>Add A New Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverUrl">Cover URL</label>
            <input
              type="text"
              id="coverUrl"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input className="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit_btn">
            <span className="submit_text">Submit</span>
            <span>Thanks!</span>
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Book Added Successfully!</h4>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBookForm;
