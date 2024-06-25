import React, { useEffect, useState } from 'react';
import './pagestyles.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  
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
          <div className="form-group">
            <label htmlFor="password">ConfirPassword</label>
            <div className="input-group">
              <input type="password" className="form-control" id="password" placeholder="***********" />
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary btn-block">SignUp</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignUp;


