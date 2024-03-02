import React, { useState } from "react";

function Bookform() {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        isbn: '',
        genre: '',
        pub_date: '',
        status: '',
    });
    const [status, setStatus] = useState('');

    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook(prevBook => ({ ...prevBook, [name]: value }));
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/books";
        const payload = JSON.stringify({ book: newBook });
        // console.log(data)
   
        try {
            const response = await fetch(url, {
                method: "POST",
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
                // Optionally, clear the form or update the UI here
              }
        } catch (err) {
            console.error("Network Error:", err);
            setErrorMessage("An error occurred while submitting the book.");
        }
    };

    return (
        <div>
            <h3>Add New Book</h3>
            <form onSubmit= {handleSubmit}>
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
                    <select name="status" value={newBook.status} onChange={handleInputChange}>
                        <option value="">Select status</option>
                        <option value="available">Available</option>
                        <option value="lent">Lent</option>
                    </select>
                 </label>

                <button type="submit">Submit</button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
}

export default Bookform;
