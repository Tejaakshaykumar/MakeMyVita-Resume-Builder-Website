import React from "react";
import "./pagestyles.css";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
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
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="col-md-3">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Resume Name</h5>
                <p className="card-text">Resume Description</p>
              </div>
              <div className="row mb-3">
                <div className="col-md-3">
                  <button>
                    <i class="bi bi-pencil-square"></i>Update
                  </button>
                </div>
                <div className="col-md-3">
                  <button>
                    <i class="bi bi-binoculars-fill"></i>View
                  </button>
                </div>
                <div className="col-md-3">
                  <button>
                    <i class="bi bi-trash-fill"></i>Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;