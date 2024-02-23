import React from 'react';
import image from '../assets/image.jpg';
import './signup.css';


const SignUp = () => {
    return (
        <div className="container">
            <div className="image"></div>
            <div className="signup-box">
                <h1>Sign Up</h1>
                
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="" />
                    <label>Email</label>
                    <input type="email" placeholder="" />
                    <label>Phone Number</label>
                    <input type="text" placeholder="" />
                    <label>Password</label>
                    <input type="password" placeholder="" />
                    <button type="signup">Sign Up</button>
                    <p className="para-1">
                        Already have an account? <a href="/sign_in">Sign In</a>
                    </p>
                </form>
            </div>
            
        </div>
    )
};

export default SignUp;


