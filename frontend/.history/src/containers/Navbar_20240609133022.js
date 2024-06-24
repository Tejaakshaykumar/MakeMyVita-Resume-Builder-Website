import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
        {/* <div className="container-fluid" style={{ backgroundColor: "white"}}> */}

        <div className="navbar-brand d-flex justify-content-end">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0" style={{ paddingLeft:'160vh'}}>
              <li className="nav-item" >
                <a className="nav-link" href="#" >
                  ContactUs
                </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              
            </ul>

            <button className="btn btn-outline-dark" type="button" style={{width:'10%'}}>
              Signup
            </button>
          </div>
        {/* </div> */}
      </nav>
    </div>
  );
}
