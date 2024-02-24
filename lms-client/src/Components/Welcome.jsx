import React from "react";
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
                <a className="sign_up-button" href="http://localhost:5174/sign_up">Sign Up</a>
                <a className="sign_in-button" href="http://localhost:5174/sign_in">Sign In</a>
            </div>
        </div>
    );
};
export default Welcome;



