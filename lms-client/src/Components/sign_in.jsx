import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.jpg';
import './signin.css';


const SignIn = () => {
    return (
        <div className="container">
            <div className="image2">
                <div className="signin-box">
                    <h1>Sign In</h1>

                    <form>
                        <label>Username</label>
                        <input type="text" placeholder="" />
                        <label>Password</label>
                        <input type="password" placeholder="" />
                        <div className="action"><Link to="/home"><button className="sign_up-button">Sign In</button></Link></div>
                        <p className="para-1">
                            Don't have an account? <a href="/sign_up">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
};

export default SignIn;


