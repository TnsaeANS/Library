import React, { useState, useEffect } from "react"
import Bookform from "./book_form.jsx";
import './Books.css';
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Books({hide}) {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);


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
    


    return (
        <div>
        <Navbar/>
        {hide ? null : visible? <Bookform/> : <button className="add-book-button" onClick={() => setVisible(true)}>Add Book</button>}
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
                            <button className="btn"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#71c72e" }} /></button>
                            <button className="btn"><FontAwesomeIcon icon={faTrash} style={{ color: "#71c72e" }} /></button>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
      

}

export default Books