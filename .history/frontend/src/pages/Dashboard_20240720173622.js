import React, { useEffect, useState } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useResume } from "../store/ResumeContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import {toast} from 'react-toastify';


function Dashboard() {
  const navigate = useNavigate();
  const { user, loading,isLoggedIn } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
    if (loading) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [loading, isLoggedIn, navigate]);
  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleDelete = async (resumeId) => {
    if (!isLoggedIn) {
      console.error('User not authenticated');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/resumes/${resumeId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Access token from authenticated user
        },
      });

      if (response.ok) {
        // Remove deleted resume from state or re-fetch resumes
        //clearResumes();
        fetchResumes();
        toast.success('Resume deleted successfully')
        console.log('Resume deleted successfully');
      } else {
        console.error('Failed to delete resume');
      }
    } catch (error) {
      console.error('Error deleting resume:', error.message);
    }
  };

  
  if (isLoading) {
    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <img
            src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
            alt="Loading..."
            width="900"
            height="700"
            style={{ border: "none" }}
          />
          <h2 style={{ fontFamily: "serif", paddingBottom: "50px" }}>
            Refresh the page
          </h2>
        </div>
        
      </div>
    );
  }

  return (
    <div className="Dashboard">
      <div className="container-fluid1">
        <div className="row">
          <div className="header1">
            <h1 className="h2">
              Dashboard
              <h2 className="sidebar-title">WELCOME {user?.username}</h2>
            </h1>
          </div>
          <main role="main" className="main-content">
            {resumes.length > 0 ? (
              resumes.map((resume) => (
                <div
                  className="card-container"
                  key={resume._id}
                  id={`resume-${resume._id}`}
                >
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">{resume.name}</h5>
                      <p className="card-text">{resume.description}</p>
                    </div>
                    <div className="button-row">
                      <button
                        className="btn1"
                        onClick={() => handleView(resume._id)}
                      >
                        <i className="bi bi-binoculars-fill"></i> View
                      </button>
                      <button
                        className="btn1"
                        onClick={() => handleView(resume._id)}
                      >
                         <i className="bi bi-cloud-arrow-down-fill"></i>Download
                      </button>
                      <button
                        className="btn1"
                        style={{ backgroundColor: "red" }}
                        onClick={() => handleDelete(resume._id)}
                      >
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
