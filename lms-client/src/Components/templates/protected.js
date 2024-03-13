// protected.js

import { isLoggedIn } from './auth';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from './Components/templates/Books.jsx'; 
import Home from './Components/templates/home_admin';
import User from './Components/templates/user';
import Lend from './Components/templates/lend.jsx';
import Overdue from './Components/templates/overdue.jsx';
import Recently from './Components/templates/recently_added';
import Reserve from './Components/templates/reserve.jsx';
import Request from './Components/templates/request.jsx';
import Requested from './Components/templates/requested.jsx';

if (!isLoggedIn()) {
  // Redirect the user to the sign-in page
  window.location.href = '/sign_in';
} else {
  // The user is logged in, so they can access the protected routes
  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/home_admin" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/lend" element={<Lend />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/overdue" element={<Overdue />} />
        <Route path="/recently" element={<Recently />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/request" element={<Request />} />
        <Route path='/requested' element={<Requested />} />
      </Routes>
    </Router>,
    document.getElementById('root')
  );
}