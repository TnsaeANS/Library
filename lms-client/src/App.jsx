import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome.jsx';
import SignUp from './Components/sign_up.jsx';
import SignIn from './Components/sign_in.jsx';
import Books from './Components/Books.jsx'; 
import Home from './Components/home_admin';
import User from './Components/user';
import Recently from './Components/recently_added';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />

          <Route path="/home_admin" element={<Home />} />
          <Route path="/user" element={<User />} />

          <Route path="/Books" element={<Books />} />
          <Route path="/recently" element={<Recently />} />

        </Routes>
      </Router>
    );
}

export default App;

