import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/HubSpot Brand Kit/Logo/PNG/main-logo-white-transparent.png';
export default function Navbar() {
  const navigate = useNavigate();
  const handleSigninClick = () => {
    navigate('/signin');
  };
  return (
    <div>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{height:"50%"}}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" style={{height:'5vh',bac}} />
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
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
            <button className=" btn btn-outline-success custom-btn" type="submit" onClick={handleSigninClick}>
              Signin
            </button>
          </form>
        </div>
      </div>
    </nav>
    
    </div>
  );
}
