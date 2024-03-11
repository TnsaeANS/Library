import React from "react";
import "../styles/user.css";
import { Link } from "react-router-dom";
import Navbar from "../templates/navbar";

const User = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='text'>
                    <h1>Welcome User</h1>
                </div>
                <div className='image'></div>
                <div className='list'>
                    <div className='l1'>
                        <Link to="/request"><button className='request_book-button' >Request Book</button></Link>
                        <Link to="/reserve"><button className='reserve_book-button' >Reserve Book</button></Link>
                        <Link to="/recently"><button className='recently_added-button' >Recently Added</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default User