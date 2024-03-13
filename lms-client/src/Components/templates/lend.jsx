import  { useEffect } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../templates/navbar';
import '../styles/lend.css';

const Lend = () => {
    const [books, setBooks] = useState([]);
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("/books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookId = e.target.bookId.value;
        const email = e.target.email.value;
        fetch("/books/lend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                bookId,
                email
            })
        })
            .then(res => res.json())
            .then(data => alert(data.message));
    }

    return (
        <>
            <Navbar />
            
            <div className="containerr">
                
                    <div className="pic"></div>
                    <div className="lend-box">
                        <h1>Lend Book</h1>

                        <form onSubmit={handleSubmit}>
                            <label>Book ID</label>
                            <input type="textt" placeholder="" />
                            <label>Book Name</label>
                            <input type="textt" placeholder="" />
                            <label>Author</label>
                            <input type="textt" placeholder="" />
                            <label>User Email</label>
                            <input type="Email" placeholder="" name="email" />
                            <div className="action">
                                <button className="lend_button">lend</button>
                            </div>

                        </form>
                    </div>

            </div>

        </>
    )
}
export default Lend

