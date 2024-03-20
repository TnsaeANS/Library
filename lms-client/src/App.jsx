import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Components/templates/Welcome.jsx';
import SignUp from './Components/templates/sign_up.jsx';
import SignIn from './Components/templates/sign_in.jsx';
import Books from './Components/templates/Books.jsx';
import Home from './Components/templates/home_admin';
import User from './Components/templates/user';
import Lend from './Components/templates/lend.jsx';
import Overdue from './Components/templates/overdue.jsx';
import Recently from './Components/templates/recently_added';
import Reserve from './Components/templates/reserve.jsx';
import Request from './Components/templates/request.jsx';
import Requested from './Components/templates/requested.jsx';
import BookStatistics from './Components/templates/book_statistics';
import Reserved from './Components/templates/reserved';
import Borrowed from './Components/templates/borrowed';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userType, setUserType] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    setUserType(localStorage.getItem('user_type'));
  }, []);

  return (
    <Router>
    {token === null ? (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/*" element={<SignIn />} />
      </Routes>
    ) : (
      <Routes>
        {userType === 'admin' && (
          <>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/home_admin" element={<Home />} />
            <Route path="/lend" element={<Lend />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/overdue" element={<Overdue />} />
            <Route path="/recently" element={<Recently />} />
            <Route path="/requested" element={<Requested />} />
            <Route path="/borrowed" element={<Borrowed />} />
            <Route path="/book_statistics" element={<BookStatistics />} />
            <Route path="/reserved" element={<Reserved />} />
            <Route path="/*" element={<Home />} />
          </>
        )}
        {userType === 'student' && (
          <>
            <Route path="/user" element={<User />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/request" element={<Request />} />
            <Route path="/recently" element={<Recently />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/*" element={<User />} />
          </>
        )}
      </Routes>
    )}
  </Router>
  );
}

export default App;


