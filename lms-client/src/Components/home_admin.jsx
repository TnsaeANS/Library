import React from 'react';
import './home_admin.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';


const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='image'></div>
                <div className="big_list">
                <div className='list'>
                    <div className='l1'>
                        <Link to="/Books"><button className='new_book-button'>New Book</button></Link>
                        <button className='delete_book-button'>Delete Book</button>
                        <button className='reserve_book-button'>Reserve Book</button>
                    </div>
                </div>
                <div className='list2'>
                    <div className='l2'>
                        <button className='lend_book-button'>Lend Book</button>
                        <button className='overdue_books-button'>Overdue Books</button>
                    </div>
                </div>
                <div className='list3'>
                    <div className='l3'>
                        <button className='new_book-button'>Book Statistics</button>
                        <button className='delete_book-button'>Delete Book</button>
                        <button className='reserve_book-button'>Reserve Book</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Home;