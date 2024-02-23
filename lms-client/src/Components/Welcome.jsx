import React from "react";
import welcomeImage from "../assets/welcome.jpg";
import "./Welcome.css";
import logo from "../assets/logo.png";
const Welcome = () => {
    return (
        <div className="container">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="image"></div>
            <div className="text">Unlock the power of knowledge</div>
            <div className="buttons">
                <button className="sign_up-button">Sign Up</button>
                <button className="sign_in-button">Sign In</button>
            </div>
        </div>
    );
};
export default Welcome;



