import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">

          {/* Logo */}
          <div className="navbar-brand d-flex justify-content-end">
            <img src="logo.png" alt="Logo" />
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>

            <button className="btn btn-outline-dark" type="button">
              Signin
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
