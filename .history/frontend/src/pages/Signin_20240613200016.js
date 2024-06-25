import React, { useEffect, useState } from 'react';
import './pagestyles.css';
import {auth,provider} from './config';
import {signInWithPopup} from 'firebase/auth';
function SignIn() {
  const [value,setValue]=useState('');
  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })
  return (
    <div className='signin'>
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-header">
          <h2>Make My Vita</h2>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="johnnysins@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input type="password" className="form-control" id="password" placeholder="***********" />
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary btn-block">SignIn</button>
        </form>
        <div className="or-use">
          <span >OR USE</span>
        </div>
        <div className="social-login">
          {value?<Dashboard/>:
          <button className="btn btn-outline-secondary" onClick={{handleClick}}><i className="fa fa-google"></i></button>
          <button className="btn btn-outline-secondary"><i className="fa fa-facebook"></i></button>
          <button className="btn btn-outline-secondary"><i className="fa fa-github"></i></button>
          <button className="btn btn-outline-secondary"><i className="fa fa-linkedin"></i></button>
        
          </div>
      </div>
    </div>
    </div>
  );
}

export default SignIn;


