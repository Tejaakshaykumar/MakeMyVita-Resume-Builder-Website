import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/HubSpot Brand Kit/Logo/PNG/main-logo-white-transparent.png';
import {isLoggedIn} from '../store/auth';
import { useResume } from "../store/ResumeContext";

export default function Navbar() {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/signin');
  };
  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleLogoutClick = () => {
    LogoutUser();
    navigate('/signin');
  };
  return (
    <div>
    
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" style={{height:'5vh',width:'15vh',objectFit:'cover'}} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/dashboard">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contactus">
                ContactUs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/FAQ">
                FAQ
              </a>
            </li>
          </ul>
          <form className="d-flex">
            {isLoggedIn ?(
              <button className=" btn btn-outline-success custom-btn" type="submit" onClick={handleLogoutClick}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button> 
            ):(
            <>
            <button className=" btn btn-outline-success custom-btn" type="submit" onClick={handleSigninClick}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SignIn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button className=" btn btn-outline-success custom-btn" type="submit" onClick={handleSignUpClick}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SignUp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            </>
          )}
          
          </form>
        </div>
      </div>
    </nav>
    
    </div>
  );
}
