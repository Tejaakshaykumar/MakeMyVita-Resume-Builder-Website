// import React, { useEffect } from "react";
// import "./pagestyles.css";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { useResume } from "../store/ResumeContext";
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';



// function Dashboard() {
//   const navigate = useNavigate();
//   const { LogoutUser, user ,loading } = useAuth();
//   const { resumes, fetchResumes, clearResumes } = useResume();
  
//   const handleView = (resumeId) => {
//     navigate(`/resume/${resumeId}`);
//   };

//   const handleDownload = ()=>{
//     const input = document.getElementById('resume');
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save('resume.pdf');
//     });
//   }

//   if (loading) {
//     return (<div >
//       <div style={{ textAlign: 'center', marginTop: '50px',}}>
//       <img
//         src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
//         alt="Loading..."
//         width="900"
//         height="700"
//         style={{ border: 'none' }}
//       />
//       <h2 style={{fontFamily:"serif", paddingBottom:"50px"}}>Refresh the page</h2>
//     </div>
//     </div>);
//   }
//   return (
//     <div className="Dashboard">
//       <div className="container-fluid1">
//         <div className="row">
//           <div className="header">
//               <h1 className="h2">Dashboard
//               <h2 className="sidebar-title" >WELCOME {user?.username}</h2>
//               </h1> 
//           </div>
//           <main role="main" className="main-content">
    
//             {resumes.length > 0 ? (
//               resumes.map((resume) => (
//                 <div className="card-container" key={resume._id}>
//                   <div className="card bg-light">
//                     <div className="card-body">
//                       <h5 className="card-title">{resume.name}</h5>
//                       <p className="card-text">{resume.description}</p>
//                     </div>
//                     <div className="button-row">
                      
//                       <button className="btn1" onClick={() => handleView(resume._id)}>
//                         <i className="bi bi-binoculars-fill"></i> View
//                       </button>
//                       <button className="btn1" onClick={() => handleDownload()}>
//                       <i class="bi bi-cloud-arrow-down-fill"></i> Download
//                       </button>
//                       <button className="btn1" style={{ backgroundColor: 'red' }}>
//                         <i className="bi bi-trash-fill"></i> Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No resumes found</p>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useEffect, useState } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useResume } from "../store/ResumeContext";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Dashboard() {
  const navigate = useNavigate();
  const { LogoutUser, user, loading } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();

  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleDownload = async (resumeId, format) => {
    navigate(`/resume/${resumeId}`);

    setTimeout(async () => {
      const resumeElement = document.getElementById("resume");
      if (resumeElement) {
        const canvas = await html2canvas(resumeElement);
        const imgData = canvas.toDataURL("image/png");

        if (format === "pdf") {
          const pdf = new jsPDF();
          pdf.addImage(imgData, "PNG", 0, 0);
          pdf.save("resume.pdf");
        } else if (format === "png") {
          const link = document.createElement("a");
          link.href = imgData;
          link.download = "resume.png";
          link.click();
        } else if (format === "jpg") {
          const img = canvas.toDataURL("image/jpeg");
          const link = document.createElement("a");
          link.href = img;
          link.download = "resume.jpg";
          link.click();
        } else if (format === "txt") {
          const textContent = "Resume content as text..."; // Generate the text content from your resume data
          const blob = new Blob([textContent], { type: "text/plain" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "resume.txt";
          link.click();
        }
      }
    }, 2000); // Adjust the delay as needed
  };

  if (loading) {
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
          <div className="header">
            <h1 className="h2">
              Dashboard
              <h2 className="sidebar-title">WELCOME {user?.username}</h2>
            </h1>
          </div>
          <main role="main" className="main-content">
            {resumes.length > 0 ? (
              resumes.map((resume) => (
                <div className="card-container" key={resume._id} id={`resume-${resume._id}`}>
                  <div className="card bg-light">
                    <div className="card-body">
                      <h5 className="card-title">{resume.name}</h5>
                      <p className="card-text">{resume.description}</p>
                    </div>
                    <div className="button-row">
                      <button className="btn1" onClick={() => handleView(resume._id)}>
                        <i className="bi bi-binoculars-fill"></i> View
                      </button>
                      <div className="dropdown">
                        <button
                          className="btn1 dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bi bi-cloud-arrow-down-fill"></i> Download
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <button className="dropdown-item" onClick={() => handleDownload(resume._id, "pdf")}>
                            PDF
                          </button>
                          <button className="dropdown-item" onClick={() => handleDownload(resume._id, "png")}>
                            PNG
                          </button>
                          <button className="dropdown-item" onClick={() => handleDownload(resume._id, "jpg")}>
                            JPG
                          </button>
                          <button className="dropdown-item" onClick={() => handleDownload(resume._id, "txt")}>
                            TXT
                          </button>
                        </div>
                      </div>
                      <button className="btn1" style={{ backgroundColor: "red" }}>
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
