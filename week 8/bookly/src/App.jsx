import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCarousel from "./components/BookCarousel";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetails";
import AddBookForm from "./pages/AddBookForm"; // Adjust the path based on your directory structure
import FloatingActionButton from "./components/FloatingActionButton"; // Import FAB
import data from "./data/data.json"
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          {/* Home page with the book carousel and book list */}
          <Route
            path="/"
            element={
              <>
                <BookCarousel />
                <BookList books={data}/> {/* Displaying book list on the homepage */}
                <FloatingActionButton /> {/* FAB included on home page */}
                <Footer/>
              </>
            }
          />
          {/* Book detail page */}
          <Route path="/books/:id" element={<BookDetail />} />
          {/* Add book page */}
          <Route path="/add-book" element={<AddBookForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
