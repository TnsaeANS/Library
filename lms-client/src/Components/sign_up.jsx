import React from 'react';
import { Link } from "react-router-dom";
import image from '../assets/image.jpg';
import './signup.css';


const SignUp = () => {
    return (
        <div className="container">
            <div className="image2">
                <div className="signup-box">
                    <h1>Sign Up</h1>

                    <form>
                        <label>Username</label>
                        <input type="text" placeholder="" />
                        <label>Email</label>
                        <input type="e-mail" placeholder="" />
                        <label>Phone Number</label>
                        <input type="text" placeholder="" />
                        <label>Password</label>
                        <input type="password" placeholder="" />
                        <div className="action"><Link to="/home"><button className="sign_up-button">Sign Up</button></Link></div>
                        <p className="para-1">
                            Already have an account? <a href="/sign_in">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
            
        </div>
    )
};

export default SignUp;


