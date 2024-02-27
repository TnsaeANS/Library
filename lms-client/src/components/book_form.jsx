import React, { useState, useEffect } from "react";

function Bookform() {

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        isbn: '',
        genre: '',
        publication_date: '',
        status: '',
      });

      const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewBook(prevBook => ({ ...prevBook, [name]: value }));
};

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/books";
        const payload = JSON.stringify({ book: newBook });
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("New book added:", data);
            // Optionally, clear the form or update the UI here
          });
      };
      
    return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={newBook.author} onChange={handleInputChange} />
      </label>
      <label>
        ISBN:
        <input type="text" name="isbn" value={newBook.isbn} onChange={handleInputChange} />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={newBook.genre} onChange={handleInputChange} />
      </label>
      <label>
        Publication Date:
        <input type="date" name="pub_date" value={newBook.pub_date} onChange={handleInputChange} />
      </label>
      <label>
        Status:
        <input type="text" name="status" value={newBook.status} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default Bookform;
