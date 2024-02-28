import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome';
import SignUp from './Components/sign_up';
import SignIn from './Components/sign_in';
import Home from './Components/home_admin';
import User from './Components/user';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/home_admin" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    );
}

export default App


