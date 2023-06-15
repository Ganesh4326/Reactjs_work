import React from 'react';
import {Outlet , Link} from 'react-router-dom';
const login = () => {
    return (
        <div>
        <div className="title">Start your all Travelling & Transporting here!</div>

        <div className='login-div'>

            <div className='div2'>
                <div className='email'>
                    <input type="text" required></input>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className='email'>
                    <input type="password" required></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password</div>
                <button className='btn'>Login</button>
                <div className="signup">
                    don't have an account? <a href='/reg'>Register</a>
                </div>
            </div>
        
        </div>
        </div>
    );
}
export default login;