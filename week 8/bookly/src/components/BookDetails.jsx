import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import booksData from "../data/data.json"; // Static data from JSON

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL params
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetching books from local storage
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    // Combine static data from JSON and dynamic data from local storage
    const allBooks = [...booksData, ...storedBooks];

    // Finding the book by ID (ensure the id comparison is correct)
    const foundBook = allBooks.find((b) => b.id === id);

    if (foundBook) {
      setBook(foundBook); // Set the book if found
    } else {
      setBook(null); // If not found, set to null
    }
  }, [id]);

  if (!book) {
    return <div>Book not found.</div>;
  }
  return (
    <div className="bookdetail_container">
      <div className="book-details">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          onError={(e) => (e.target.src = "default-image-path.jpg")} 
        />
        <div className="book-content">
          <h2>{book.title}</h2>
          <h3>{book.genre}</h3>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
  
};

export default BookDetails;
