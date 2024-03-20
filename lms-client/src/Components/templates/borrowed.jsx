import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";
import "../styles/Books.css";
import { useLocation } from "react-router-dom";

const Borrowed = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);
    const [editBook, setEditBook] = useState(null);
  
  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await fetch("http://127.0.0.1:3000/lends");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        const sortedBooks = [...data].sort((a, b) => b.id - a.id);

        setBooks(sortedBooks);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    loadBooks();
  }, []);


  return (
    <div>
      <Navbar />
      <h3 className="recently_added">Recently Borrowed Books</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Genre</th>
            <th>Publication Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.book.title}</td>
              <td>{book.book.author}</td>
              <td>{book.book.isbn}</td>
              <td>{book.book.genre}</td>
              <td>{book.book.pub_date}</td>
              <td>{book.book.status}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Borrowed;