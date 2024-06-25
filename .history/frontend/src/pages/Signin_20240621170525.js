import React, { useEffect, useState } from 'react';
import './pagestyles.css';
import { useNavigate } from 'react-router-dom';
import { auth, provider1, provider2, provider3 } from './config';
import { signInWithPopup } from 'firebase/auth';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function SignIn() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
        const response =await fetch('http://localhost:5000/api/auth/login',{
          method :"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({email,password}),
        });
          console.log("login form",response);

        if(response.ok){
          const res_data =await response.json();
          console.log("res from server",res_data);
          storeTokenInLS(res_data.token);
          alert('Successfully signed in');
        navigate('/dashboard');
        }
        else{
          alert('invalid credentials');
        }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Failed to sign in');
    }
  };

  const handleClick1 = () => {
    signInWithPopup(auth, provider1).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('/dashboard');
    });
  };

  const handleClick2 = () => {
    signInWithPopup(auth, provider2).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('/dashboard');
    });
  };

  const handleClick3 = () => {
    signInWithPopup(auth, provider3).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('/dashboard');
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div className='signin'>
      <div className="signin-container">
        <div className="signin-box">
          <div className="signin-header">
            <h2>Make My Vita</h2>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="johnnysins@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <input type="password" className="form-control" id="password" placeholder="***********" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </form>
          <div className="or-use">
            <span>OR USE</span>
          </div>
          <div className="social-login">
            <button className="btn btn-outline-secondary" onClick={handleClick1}><i className="fa fa-google"></i></button>
            <button className="btn btn-outline-secondary" onClick={handleClick3}><i className="fa fa-facebook"></i></button>
            <button className="btn btn-outline-secondary" onClick={handleClick2}><i className="fa fa-github"></i></button>
          </div>
          <span>No Account?</span>
          <button type="submit" className="btn btn-primary btn-block" onClick={handleSignUpClick}>Register now</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
