import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import booksData from "../data/data.json"; // Static data from JSON

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const location = useLocation();
  
  // Extract search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    // Fetching books from local storage
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    // Combining static and dynamic data
    const combinedBooks = [...booksData, ...storedBooks];
    setBookList(combinedBooks);
  }, []);

  useEffect(() => {
    // Filter books based on the search query
    const filtered = bookList.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, bookList]);

  return (
    <div className="book-list">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <Link to={`/books/${book.id}`} key={book.id} className="book-item-link">
            <div className="book-item">
              <img
                src={book.coverUrl}
                alt={book.title}
                onError={(e) => {
                  console.error("Image not found for", book.cover);
                  e.target.src = "path-to-your-placeholder.jpg"; // Use a default image
                }}
              />
              <h3>{book.genre}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>No books available. Please add some books!</p>
      )}
    </div>
  );
};

export default BookList;
