import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../templates/navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import '../styles/reserve.css';

const Reserve = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/unreserved_books/')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    const handleSubmit = (book) => {
        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                book_id: book.id,
                user_id: 1,
                reservation_date: new Date()
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    return (
        <div>
        <Navbar/>
        <h3 className="reserve">Reserve</h3>
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
                    {books &&books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.genre}</td>
                            <td>{book.pub_date}</td>
                            <td>{book.status}</td>
                            <button className="btn"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#71c72e" }} 
                            onClick={() => {
                                handleSubmit(book);
                                console.log("lolo");
                                }}  /></button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
}

export default Reserve

