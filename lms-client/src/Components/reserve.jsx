import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import './reserve.css';

const Reserve = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, bookName, author, email);
    }

    return (
        <>
            <Navbar />
            <div className='screen'>
                <div className="picture"></div>
                <div className="reserve-box">
                    <h1 className='reserve'>Reserve Book</h1>
                    {/* <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text." placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Author</label>
                        <input type="text." placeholder="" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        <label>User Email</label>
                        <input type="mail" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="action">
                            <button className="reserve_button">Reserve</button>
                        </div>

                    </form> */}
                </div>
            </div>
        </>
    );
};
export default Reserve
