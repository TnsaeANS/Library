import React, { useState, useEffect } from "react";
import Navbar from "../templates/navbar";
import "../styles/overdue.css";

const Overdue = () => {
  const [overdueBooks, setOverdueBooks] = useState([]);

  useEffect(() => {
    async function loadOverdueBooks() {
      const response = await fetch("http://127.0.0.1:3000/overdue" , {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setOverdueBooks(data);
    }
    loadOverdueBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="con">
        <h1 className="overdue">Overdue Books</h1>

        <table className="T">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {overdueBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default Overdue;


