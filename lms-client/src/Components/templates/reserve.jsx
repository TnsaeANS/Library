import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import './reserve.css';

const Reserve = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [books, setBooks] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, bookName, author, email);
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
                    {books.map((book) => (
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
                                handleEdit(book);
                                }}  /></button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
}

export default Reserve

