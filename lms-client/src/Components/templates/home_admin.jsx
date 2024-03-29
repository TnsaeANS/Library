import React from 'react';
import '../styles/home_admin.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';


const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='text'>
                    <h1>Hello Admin</h1>
                </div>
                <div className='image'></div>
                <div className="big_list">
                <div className='list'>
                    <div className='l1'>
                        <Link to="/Books"><button className='new_book-button'>New Book</button></Link>
                        <Link to="/reserved"><button className='reserved_book-button'>Reserved Book</button></Link>
                    </div>
                </div>
                <div className='list2'>
                    <div className='l2'>
                        <Link to="/lend"><button className='lend_book-button'>Lend Book</button></Link>
                        <Link to="/overdue"><button className='overdue_books-button'>Overdue Books</button></Link>
                        <Link to="/borrowed"><button className='overdue_books-button'>Borrowed Books</button></Link>

                    </div>
                </div>
                <div className='list3'>
                    <div className='l3'>
                        <Link to="/book_statistics"><button className='book_statistics-button'>Book Statistics</button></Link>
                        <Link to="/requested"><button className='requested_book-button'>Requested Book</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Home;
