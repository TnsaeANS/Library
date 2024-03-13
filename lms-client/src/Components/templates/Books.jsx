import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Bookform from "./book_form.jsx";
import Navbar from "./navbar";
import "../styles/Books.css";

const Books = ({ hide }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await fetch("http://127.0.0.1:3000/books");
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

  const handleEdit = (book) => {
    setVisible(true);
    setEditBook(book);
  };

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      });
      if (!response.ok) {
        throw new Error("Failed to delete book");
      }

      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      {hide ? null : visible ? (
        <Bookform editBook={editBook} handleEdit={handleEdit} />
      ) : (
        <button className="add-book-button" onClick={() => setVisible(true)}>
          Add Book
        </button>
      )}
      <h3 className="recently_added">Recently Added Books</h3>
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
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.genre}</td>
              <td>{book.pub_date}</td>
              <td>{book.status}</td>
              <button onClick={() => handleEdit(book)}
                className="btn"
                style={{ display: hide ? "none" : "block" }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: "#71c72e" }}
                  
                />
              </button>
              <button onClick={() => handleDelete(book.id)}
                className="btn"
                style={{ display: hide ? "none" : "block" }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "#71c72e" }}
                  
                />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;