import React, { useEffect, useState } from 'react';
import "../styles/book_statistics.css"
import Navbar from "../templates/navbar";

const BookStatistics = () => {
    const [statistics, setStatistics] = useState({
        lended_books: 0,
        reserved_books: 0,
        new_books: 0,
        requested_books: 0,
        overdue_books: 0
    });

    useEffect(() => {
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        try {
            const response = await fetch('http://localhost:3000/statistics');
            const data = await response.json();
            setStatistics(data);
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };

    return (
        <>
            <Navbar />
            
            <div className="book-statistics">
                <h1 className='bs'>Book Statistics</h1>
                <div className='column'>
                    <div className='s1'>
                        <p className='c'>Lended Books: {statistics.lended_books}</p>
                        <p className='c'>Reserved Books: {statistics.reserved_books}</p>
                    </div>
                    <div className='s2'>
                        <p className='c'>New Books: {statistics.new_books}</p>
                    </div>
                    <div className='s3'>
                        <p className='c'>Requested Books: {statistics.requested_books}</p>
                        <p className='c'>Overdue Books: {statistics.overdue_books}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookStatistics;
