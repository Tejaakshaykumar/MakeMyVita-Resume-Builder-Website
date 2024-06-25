import React, { useEffect } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
function Dashboard() {
  const navigate = useNavigate();
  const {LogoutUser} =useAuth();
  const handleLogout = () => {
    LogoutUser();
    alert('Successfully logged out');
    navigate('/signin');
  };
  return (
    <div className="Dashboard">
    <div className="container-fluid1">
      <div className="row">
        <nav className="sidebar">
          <div className="sidebar-sticky">
            <h2 className="sidebar-title">Welcome</h2>
            <ul className="nav1 flex-column">
              <li className="nav-item1">
                <a className="nav-link1 active1" href="#">
                <i class="bi bi-house-door-fill"></i>Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="bi bi-plus-square"></i> Create new Resume
                </a>
              </li>

              <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                     <i className="bi bi-box-arrow-left"></i> Logout
                  </button>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="main-content">
          <div className="header">
            <h1 className="h2">Dashboard</h1>
          </div>
          <div className="card-container">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Resume Name</h5>
                <p className="card-text">Resume Description</p>
              </div>
              <div className="button-row">
                <button className="btn1">
                  <i className="bi bi-pencil-square"></i> Update
                </button>
                <button className="btn1">
                  <i className="bi bi-binoculars-fill"></i> View
                </button>
                <button className="btn1" style={{backgroundColor:'red'}}>
                  <i className="bi bi-trash-fill"></i> Delete
                </button>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">Resume Name</h5>
                <p className="card-text">Resume Description</p>
              </div>
              <div className="button-row">
                <button className="btn1">
                  <i className="bi bi-pencil-square"></i> Update
                </button>
                <button className="btn1">
                  <i className="bi bi-binoculars-fill"></i> View
                </button>
                <button className="btn1" style={{backgroundColor:'red'}}>
                  <i className="bi bi-trash-fill"></i> Delete
                </button>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;

// import React from "react";
// import "./pagestyles.css";
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     alert('Successfully logged out');
//     navigate('/signin');
//   };

//   return (
//     <div className="Dashboard">
//       <div className="container-fluid1">
//         <div className="row">
//           <nav className="sidebar">
//             <div className="sidebar-sticky">
//               <h2 className="sidebar-title">Welcome</h2>
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a className="nav-link active" href="#">
//                     <i className="bi bi-house-door-fill"></i>Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <i className="bi bi-plus-square"></i> Create new Resume
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link" onClick={handleLogout}>
//                     <i className="bi bi-box-arrow-left"></i> Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <main role="main" className="main-content">
//             <div className="header">
//               <h1 className="h2">Dashboard</h1>
//             </div>
//             <div className="card-container">
//               <div className="card bg-light">
//                 <div className="card-body">
//                   <h5 className="card-title">Resume Name</h5>
//                   <p className="card-text">Resume Description</p>
//                 </div>
//                 <div className="button-row">
//                   <button className="btn1">
//                     <i className="bi bi-pencil-square"></i> Update
//                   </button>
//                   <button className="btn1">
//                     <i className="bi bi-binoculars-fill"></i> View
//                   </button>
//                   <button className="btn1" style={{backgroundColor:'red'}}>
//                     <i className="bi bi-trash-fill"></i> Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="card-container">
//               <div className="card bg-light">
//                 <div className="card-body">
//                   <h5 className="card-title">Resume Name</h5>
//                   <p className="card-text">Resume Description</p>
//                 </div>
//                 <div className="button-row">
//                   <button className="btn1">
//                     <i className="bi bi-pencil-square"></i> Update
//                   </button>
//                   <button className="btn1">
//                     <i className="bi bi-binoculars-fill"></i> View
//                   </button>
//                   <button className="btn1" style={{backgroundColor:'red'}}>
//                     <i className="bi bi-trash-fill"></i> Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
