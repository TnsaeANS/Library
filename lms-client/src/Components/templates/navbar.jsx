import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user-icon.png';
import "../styles/navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchEffect, setSearchEffect] = useState(false);

  const handleSearch = () => {
    setSearchEffect(true);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/sign_in");
  };
  useEffect(() => {
    if (searchEffect) {
      navigate("/Books", { state: { searchQuery } });
      setSearchEffect(false);
    }
  }, [searchEffect, navigate, searchQuery]);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/backed"><img  src={logo} alt="logo" /></a>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="user-icon">
      <button onClick={logout}>Logout</button>
        <img src={userIcon} alt="User Icon" />
      </div>
    </div>
  );
};

export default Navbar;