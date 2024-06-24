import React from 'react';
import './pagestyles.css';

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-header">
          <h2>Log In to Qpay</h2>
          <p>Quick & Simple way to Automate your payment</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="johndoe@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input type="password" className="form-control" id="password" placeholder="***********" />
              {/* <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fa fa-eye"></i>
                </span>
              </div> */}
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
          <span><hr></hr>OR USE<</span>
        </div>
        <div className="social-login">
          <button className="btn btn-outline-secondary"><i className="fa fa-google"></i></button>
          <button className="btn btn-outline-secondary"><i className="fa fa-apple"></i></button>
          <button className="btn btn-outline-secondary"><i className="fa fa-facebook"></i></button>
        </div>
      </div>
      <footer>
        <p>© 2021. - 2025 All Rights Reserved. Qpay</p>
      </footer>
    </div>
  );
}

export default SignIn;
