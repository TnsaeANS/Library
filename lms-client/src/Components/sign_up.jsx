import React from 'react';
import image from '../assets/image.jpg';
import './signup.css';
import logo from '../assets/logo.png';

const SignUp = () => {
    return (
        <div className="container">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="image">
                <img src={image} alt="sign in" />
            </div>
        </div>
    );
};

export default SignUp;


