import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import SignUp from './Components/sign_up';
import SignIn from './Components/sign_in';
import Books from './features/books/Books.jsx'; // Make sure this import path is correct

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/books" element={<Books />} /> {/* Add this line to include the Books component */}
        </Routes>
      </Router>
    );
}

export default App;
