import React, { useEffect } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useResume } from "../store/ResumeContext";


function Dashboard() {
  const navigate = useNavigate();
  const { LogoutUser, user ,loading } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();
  
  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  if (loading) {
    return (<div >
      <div style={{ textAlign: 'center', marginTop: '50px',}}>
      <img
        src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
        alt="Loading..."
        width="900"
        height="700"
        style={{ border: 'none' }}
      />
      <h2 style={{fontFamily:"serif", paddingBottom:"50px"}}>Refresh the page</h2>
    </div>
    </div>);
  }
  return (
    <div className="Dashboard">
      <div className="container-fluid1">
        <div className="row">
          {/* <nav className="sidebar">
            <div className="sidebar-sticky">
              <h2 className="sidebar-title" >WELCOME</h2>
              <h2 className="sidebar-title" >{user?.username}</h2>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="bi bi-house-door-fill"></i> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-plus-square"></i> Create new Resume
                  </a>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav> */}
          <div className="header">
              <h1 className="h2">Dashboard
              <h2 className="sidebar-title" >WELCOME {user?.username}</h2>
              </h1> 
          </div>
          <main role="main" className="main-content">
    
            {resumes.length > 0 ? (
              resumes.map((resume) => (
                <div className="card-container" key={resume._id}>
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">{resume.name}</h5>
                      <p className="card-text">{resume.description}</p>
                    </div>
                    <div className="button-row">
                      
                      <button className="btn1" onClick={() => handleView(resume._id)}>
                        <i className="bi bi-binoculars-fill"></i> View
                      </button>
                      <button className="btn1">
                        <i className="bi bi-pencil-square"></i> Download
                      </button>
                      <button className="btn1" style={{ backgroundColor: 'red' }}>
                        <i className="bi bi-trash-fill"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No resumes found</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
