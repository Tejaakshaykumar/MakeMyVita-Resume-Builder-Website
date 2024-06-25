import React from "react";
import "./pagestyles.css";
import Foot from '../containers/Foot'
function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="sidebar">
          <div className="sidebar-sticky">
            <h2 className="sidebar-title">Welcome</h2>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="main-content">
          <div className="header">
            <h1 className="h2">Dashboard</h1>
          </div>
          <button className="btn"><i class="bi bi-plus-square"></i> Create new resume</button>
          <div className="card-container">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Resume Name</h5>
                <p className="card-text">Resume Description</p>
              </div>
              <div className="button-row">
                <button className="btn">
                  <i className="bi bi-pencil-square"></i> Update
                </button>
                <button className="btn">
                  <i className="bi bi-binoculars-fill"></i> View
                </button>
                <button className="btn">
                  <i className="bi bi-trash-fill"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;