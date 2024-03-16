import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../templates/navbar';
import '../styles/reserve.css';

const Reserved = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/reservations')
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error(error));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, bookName, author, email);
    }

    return (
        <div>
        <Navbar/>
        <h3 className="reserved">Reserved</h3>
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
                        <th>Reserved By</th>
                    </tr>
                </thead>
                <tbody>
                    {books &&books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.book.title}</td>
                            <td>{book.book.author}</td>
                            <td>{book.book.isbn}</td>
                            <td>{book.book.genre}</td>
                            <td>{book.book.pub_date}</td>
                            <td>{book.book.status}</td>
                            <td>{book.user.email}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
}

export default Reserved

