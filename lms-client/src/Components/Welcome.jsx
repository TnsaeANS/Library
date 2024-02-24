import React from "react";
import { Link } from "react-router-dom";
import welcomeImage from "../assets/welcome.jpg";
import "./Welcome.css";
import logo from "../assets/logo.png";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
const Welcome = () => {
    return (
        <div className="container">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="image"></div>
            <div className="text">Unlock the power of knowledge</div>
            <div className="buttons">
                <Link to="/sign_in"><button className="sign_in-button">Sign In</button></Link>
                <Link to="/sign_up"><button className="sign_up-button">Sign Up</button></Link>
            </div>
        </div>
    );
};
export default Welcome;

