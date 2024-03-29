import React, { useState, useEffect } from "react";
import "../styles/book_form.css"

function Bookform({ editBook }) {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        isbn: '',
        genre: '',
        pub_date: '',
        status: '',
    });
    
    useEffect(() => {
        if (editBook) {
            setNewBook(editBook); 
        } else {
            setNewBook({
                title: '',
                author: '',
                isbn: '',
                genre: '',
                pub_date: '',
                status: '',
            });
        }
    }, [editBook])
    const [errorMessage, setErrorMessage] = useState("");
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook(prevBook => ({ ...prevBook, [name]: value }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = editBook ? `http://localhost:3000/books/${editBook.id}` : "http://localhost:3000/books";
        const payload = JSON.stringify({ book: newBook });
        // console.log(data)

        try {
            const response = await fetch(url, {
                method: editBook ? "PATCH" : "POST",
                headers: { "Content-Type": "application/json" },
                body: payload,
            });
            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message == "has to be a different value") {
                  setErrorMessage("Title has to be a different value.");
                } else {
                    
                  setErrorMessage(errorData.message || "An error occurred while submitting the book.");
                }
              } else {
                const data = await response.json();
                console.log("New book added:", data);
                setNewBook({
                    title: '',
                    author: '',
                    isbn: '',
                    genre: '',
                    pub_date: '',
                    status: '',
                });
                window.location.reload(false);
              }
        } catch (err) {
            console.error("Network Error:", err);
            setErrorMessage("An error occurred while submitting the book.");
        }
    };

    return (
        <div>
            <h3 style={{marginLeft: "40px"}}>Add New Book</h3>
            <div className="book_form">
            <form className="form_book" onSubmit= {handleSubmit}>
                <label>
                    Title:
                    <input className="title" type="text" name="title" value={newBook.title} onChange={handleInputChange} />
                </label>
                <label>
                        Author:
                    <input className="title" type="text" name="author" value={newBook.author} onChange={handleInputChange} />
                </label>
                <label>
                    ISBN:
                    <input className="title" type="text" name="isbn" value={newBook.isbn} onChange={handleInputChange} />
                </label>
                <label>
                    Genre:
                    <input className="title" type="text" name="genre" value={newBook.genre} onChange={handleInputChange} />
                </label>
                <label>
                    Publication Date:
                    <input className="title" type="date" name="pub_date" value={newBook.pub_date} onChange={handleInputChange} />
                </label>
                <label>
                    Status:
                    <select className="title" name="status" value={newBook.status} onChange={handleInputChange}>
                        <option value="">Select status</option>
                        <option value="available">Available</option>
                        <option value="lent">Lent</option>
                    </select>
                 </label>
                <button className="submit_button" type="submit">Submit</button>
            </form>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}        </div>
    );
}

export default Bookform;