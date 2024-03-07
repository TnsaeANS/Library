import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import './request.css';

const Request = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                email,
                isbn,
                publisher
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    return (
        <>
            <Navbar />
            <div className='page'>
                <div className="p"></div>
                <div className="request-box">
                    <h1 className='request'>Request Book</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text." placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Publisher</label>
                        <input type="text." placeholder="" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                        <label>Author</label>
                        <input type="text." placeholder="" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        <label>User Email</label>
                        <input type="mail" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>ISBN</label>
                        <input type="text." placeholder="" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                        <div className="action">
                            <button className="request_button">Request</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Request;

