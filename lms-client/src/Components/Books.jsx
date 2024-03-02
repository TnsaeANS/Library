import React, { useState, useEffect } from "react"
import Bookform from "./book_form.jsx";

function Books() {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editBook, setEditBook] = useState(null);

    useEffect(() => {
        async function loadBooks(){
            try{
                
                const response = await fetch('http://127.0.0.1:3000/books');
                if (!response.ok) throw new Error('Network response was not ok');
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
        setEditBook(book);
        console.log("edit")}


    return (
        <div>
        <Bookform editBook={editBook}/>
        <h3>Recently Added Books</h3>
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
                            <td><button 
                            onClick={() => {
                                handleEdit(book);
                                }} >Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
      

}

export default Books