import React, { useState, useEffect } from 'react';
import './pagestyles.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  cont [fname,setName] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (password && confirmPassword) {
      setPasswordMatch(password === confirmPassword);
    } else {
      setPasswordMatch(true); 
    }
  }, [password, confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordMatch) {
      
      console.log('Form submitted');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className='signin'>
      <div className="signin-container">
        <div className="signin-box">
          <div className="signin-header">
            <h2>Make My Vita</h2>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="akshay" 
                value={email}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="akshay@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="***********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-group">
                <input 
                  type="password" 
                  className="form-control" 
                  id="confirmPassword" 
                  placeholder="***********" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {!passwordMatch && (
                <span style={{color:'red'}}>Passwords do not match</span>
              )}
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
