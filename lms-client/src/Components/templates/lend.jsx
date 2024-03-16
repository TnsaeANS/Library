import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../templates/navbar";
import "../styles/lend.css";

const Lend = () => {
  const [books, setBooks] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/lendable_books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleLend = (book) => {
    fetch("http://localhost:3000/lends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lend: {
          lent_date: new Date(),
          return_date: new Date() + 5 * 24 * 60 * 60 * 1000,
          user_id: 1,
          book_id: book,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));


    setBooks(books.filter((b) => b.id !== book));
  };

  return (
    <div>
      <Navbar />
      <h3 className="reserve">Lend</h3>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.genre}</td>
              <td>{book.pub_date}</td>
              <td>{book.status}</td>
              <td>
                <button onClick={() => handleLend(book.id)}>LEND</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Lend;
