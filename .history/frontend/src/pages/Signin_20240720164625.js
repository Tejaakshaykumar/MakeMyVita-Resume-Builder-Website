import React, { useEffect, useState } from 'react';
import './pagestyles.css';
import { useNavigate } from 'react-router-dom';
import { auth, provider1, provider2, provider3 } from './config';
import { signInWithPopup } from 'firebase/auth';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {storeTokenInLS, isLoggedIn } = useAuth();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
        const response =await fetch('https://makemyvita.onrender.com/api/auth/login',{
          method :"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({email,password}),
        });

        if(response.ok){
          const res_data =await response.json();
          storeTokenInLS(res_data.token);
          toast.success('Successfully signed in');
        navigate('/dashboard');
        }
        else{
          toast.warning('invalid credentials');
        }
    } catch (error) {
      console.error('Error signing in:', error);
      toast.warning('Failed to sign in');
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const data = await signInWithPopup(auth, provider);
      const token = await data.user.getIdToken();
      const response = await fetch('http:localhost/api/firebase/social-login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        toast.success('Successfully signed in with social account');
        navigate('/dashboard');
      } else {
        toast.warning('Failed to sign in with social account');
      }
    } catch (error) {
      console.error('Error with social login:', error);
      toast.warning('Failed to sign in with social account');
    }
  };

  if (isLoggedIn) {
    navigate('/dashboard');
  }

  // useEffect(() => {
  //   setValue(localStorage.getItem('email'));
  // }, []);

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
              <input type="email" className="form-control" id="email" placeholder="akshay@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
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
            <button className="btn btn-outline-secondary" onClick={() => handleSocialLogin(provider1)}><i className="fa fa-google"></i></button>
            <button className="btn btn-outline-secondary" onClick={() => handleSocialLogin(provider3)}><i className="fa fa-facebook"></i></button>
            <button className="btn btn-outline-secondary" onClick={() => handleSocialLogin(provider2)}><i className="fa fa-github"></i></button>
          </div>
          <span>No Account?</span>
          <button type="submit" className="btn btn-primary btn-block" onClick={handleSignUpClick}>Register now</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
