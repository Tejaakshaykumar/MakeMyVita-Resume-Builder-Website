import React, { useEffect } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useResume } from "../store/ResumeContext";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



function Dashboard() {
  const navigate = useNavigate();
  const { LogoutUser, user ,loading } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();
  
  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleDownload = ()=>{
    const input = document.getElementById('resume');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  }

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
                      <button className="btn1" onClick={() => handleDownload()}>
                      <i class="bi bi-cloud-arrow-down-fill"></i> Download
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
