import React from 'react';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user-icon.png';
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="search-bar">
        <input type="text" placeholder=" Search" />
        <button>Search</button>
      </div>
      <div className="user-icon"><img src={userIcon} alt="User Icon" /></div>
    </div>
  );
};

export default Navbar;