import React from 'react';
import './pagestyles.css';

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
                  Crea
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
            <div className="sidebar-footer mt-auto">
              <a className="nav-link" href="#"><i className="icon-power-off"></i></a>
              <a className="nav-link" href="#"><i className="icon-comments"></i></a>
              <a className="nav-link" href="#"><i className="icon-bell"></i></a>
            </div>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="alert alert-danger" role="alert">
              This template is under maintenance!
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">$ 153.000</h5>
                  <p className="card-text">Revenue</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">20</h5>
                  <p className="card-text">Sales</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">20</h5>
                  <p className="card-text">Customer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">20</h5>
                  <p className="card-text">Employee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Chart Daily</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Todo List</h5>
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


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Dashboard</title>
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
// </head>
// <body>
//   <div id="root"></div>
//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
// </body>
// </html>
