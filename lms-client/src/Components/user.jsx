import React from "react";
import "./user.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

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
                        <button className='request_book-button' >Request Book</button>
                        <button className='reserve_book-button' >Reserve Book</button>
                        <div className="action">
 <Link to="/recently">
    <button className="recently_added-button">Recently Added</button>
 </Link>
</div>                    </div>
                </div>
            </div>
        </>
    );
};
export default User