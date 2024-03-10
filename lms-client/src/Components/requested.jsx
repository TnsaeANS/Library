import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./navbar";
import './requested.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const Requested = () => {

    const [requests, setRequests] = useState([]);
    useEffect(() => {
        async function loadBooks() {
            try {

                const response = await fetch('http://127.0.0.1:3000/requests');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                const sortedBooks = [...data].sort((a, b) => b.id - a.id);

                setRequests(sortedBooks);

            } catch (error) {
                console.log(error.message);
            }
        }
        loadBooks();
    }, []);

    return (
        <>
            <Navbar />

            <h3 className="recently_added">Requested Books</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Publisher</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.title}</td>
                            <td>{request.author}</td>
                            <td>{request.isbn}</td>
                            <td>{request.publisher}</td>
                            <td>{request.user && request.user.email}</td>
                            <button className="btn" onClick={() => {
                                    fetch(`http://localhost:3000/requests/${request.id}`, {
                                        method: 'DELETE',
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            setRequests(requests.filter(book => book.id !== request.id));
                                        })
                                        .catch(console.log)
                                }}><FontAwesomeIcon icon={faTrash} style={{ color: "#71c72e" }} /></button>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Requested

