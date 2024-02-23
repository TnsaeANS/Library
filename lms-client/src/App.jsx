import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './Components/Welcome';
import SignUp from './Components/sign_up';
import SignIn from './Components/sign_in';
function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </Router>
    );
}

export default App

