import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import image from "../../assets/image.jpg";
import "../styles/signup.css";


const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users", {
        username: username,
        email: email,
        user_type: userType,
        password: password,
        password_confirmation: password,
      }, {
        headers: {
          'Content-Type': 'application/json',

        }
      });

      const newUser = response.data;
      console.log("New user:", newUser);

      navigate("/sign_in");



    } catch (error) {
      console.error(error.response.data);
      setError(JSON.stringify(error.response.data.error[0]));
    }
 };

  return (
    <div className="container">
      <div className="image2">
        <div className="signup-box">
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <label>
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>
              Email
            </label>
            <input
              type="e-mail"
              name="email"
              placeholder="Enter BITS Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="title">
              <label>
                User Type
                
              </label></div>
              <select
                  name="user_type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                </select>
            <label>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="action">
              <button type="submit" className="sign_up-button">
                Sign Up
              </button>
            </div>
            <p className="para-1">
              Already have an account? <Link to="/sign_in">Sign In</Link>
            </p>
          </form>
          {error && <div className="error-message"><p>{error}</p></div>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;