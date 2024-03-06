import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome.jsx';
import SignUp from './Components/sign_up.jsx';
import SignIn from './Components/sign_in.jsx';
import Books from './Components/Books.jsx'; 
import Home from './Components/home_admin';
import User from './Components/user';
import Lend from './Components/lend.jsx';
import Overdue from './Components/overdue.jsx';
import Recently from './Components/recently_added';
import Reserve from './Components/reserve.jsx';
import Request from './Components/request.jsx';
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/home_admin" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/lend" element={<Lend />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/overdue" element={<Overdue />} />
          <Route path="/recently" element={<Recently />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    );
}

export default App;

