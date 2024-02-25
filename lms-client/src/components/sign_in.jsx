import React from 'react';
import image from '../assets/image.jpg';
import './signin.css';


const SignIn = () => {
    return (
        <div className="container">
            <div className="image"></div>
            <div className="signin-box">
                <h1>Sign In</h1>
                
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="" />
                    <label>Password</label>
                    <input type="password" placeholder="" />
                    <button type="signin">Sign In</button>
                    <p className="para-1">
                        Don't have an account? <a href="/sign_up">Sign Up</a>
                    </p>
                </form>
            </div>
            
        </div>
    )
};

export default SignIn;


