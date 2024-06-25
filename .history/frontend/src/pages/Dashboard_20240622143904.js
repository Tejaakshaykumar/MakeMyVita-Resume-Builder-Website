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
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

function Dashboard() {
  const navigate = useNavigate();
  const { LogoutUser, user, loading } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();

  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleDownload = async (resume, format) => {
     const resumeElement = document.getElementById(`resume-${resume._id}`);
//     if (!resumeElement) return;

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
        }else if (format === "docx") {
          const doc = new Document({
              sections: [
                  {
                      properties: {},
                      children: [
                          new Paragraph({
                              children: [
                                  new TextRun({
                                      text: "Resume Content",
                                      bold: true,
                                      size: 24,
                                  }),
                              ],
                          }),
                          new Paragraph({
                              children: [
                                  new TextRun({
                                      text: "Personal Details:",
                                      bold: true,
                                      size: 20,
                                  }),
                              ],
                          }),
                          new Paragraph({
                              children: [
                                  new TextRun(`Name: ${resume.personalDetails.firstName} ${resume.personalDetails.lastName}`),
                              ],
                          }),
                          new Paragraph({
                              children: [
                                  new TextRun(`Professional Email: ${resume.personalDetails.professionalEmail}`),
                              ],
                          }),
                          new Paragraph({
                              children: [
                                  new TextRun(`Phone: ${resume.personalDetails.phone}`),
                              ],
                          }),
                          // Add more paragraphs for each section of the resume as needed
                      ],
                  },
              ],
          });
      
          Packer.toBlob(doc).then((blob) => {
              saveAs(blob, "resume.docx");
          });
      }
      
      }
    }, 2000); 
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
                          <button className="dropdown-item" onClick={() => handleDownload(resume._id, "docx")}>
                            DOCX
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

// import React, { useEffect, useState } from "react";
// import "./pagestyles.css";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../store/auth";
// import { useResume } from "../store/ResumeContext";
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { Document, Packer, Paragraph, TextRun } from "docx";
// import { saveAs } from "file-saver";

// function Dashboard() {
//   const navigate = useNavigate();
//   const { LogoutUser, user, loading } = useAuth();
//   const { resumes, fetchResumes, clearResumes } = useResume();

//   const handleView = (resumeId) => {
//     navigate(`/resume/${resumeId}`);
//   };

//   const handleDownload = async (resume, format) => {
//     const resumeElement = document.getElementById(`resume-${resume._id}`);

//     if (!resumeElement) return;

//     if (format === "pdf") {
//       const canvas = await html2canvas(resumeElement);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "PNG", 0, 0);
//       pdf.save("resume.pdf");
//     } else if (format === "png" || format === "jpg") {
//       const canvas = await html2canvas(resumeElement);
//       const imgData = canvas.toDataURL(`image/${format}`);
//       const link = document.createElement("a");
//       link.href = imgData;
//       link.download = `resume.${format}`;
//       link.click();
//     } else if (format === "docx") {
//       const doc = new Document({
//         sections: [
//           {
//             properties: {},
//             children: [
//               new Paragraph({
//                 children: [
//                   new TextRun({
//                     text: "Resume Content",
//                     bold: true,
//                     size: 24,
//                   }),
//                 ],
//               }),
//               new Paragraph({
//                 children: [
//                   new TextRun({
//                     text: "Personal Details:",
//                     bold: true,
//                     size: 20,
//                   }),
//                 ],
//               }),
//               new Paragraph({
//                 children: [
//                   new TextRun(`Name: ${resume.personalDetails.firstName} ${resume.personalDetails.lastName}`),
//                 ],
//               }),
//               new Paragraph({
//                 children: [
//                   new TextRun(`Professional Email: ${resume.personalDetails.professionalEmail}`),
//                 ],
//               }),
//               new Paragraph({
//                 children: [
//                   new TextRun(`Phone: ${resume.personalDetails.phone}`),
//                 ],
//               }),
//               // Add more paragraphs for each section of the resume as needed
//             ],
//           },
//         ],
//       });

//       Packer.toBlob(doc).then((blob) => {
//         saveAs(blob, "resume.docx");
//       });
//     }
//   };

//   if (loading) {
//     return (
//       <div>
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//           <img
//             src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
//             alt="Loading..."
//             width="900"
//             height="700"
//             style={{ border: "none" }}
//           />
//           <h2 style={{ fontFamily: "serif", paddingBottom: "50px" }}>
//             Refresh the page
//           </h2>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="Dashboard">
//       <div className="container-fluid1">
//         <div className="row">
//           <div className="header">
//             <h1 className="h2">
//               Dashboard
//               <h2 className="sidebar-title">WELCOME {user?.username}</h2>
//             </h1>
//           </div>
//           <main role="main" className="main-content">
//             {resumes.length > 0 ? (
//               resumes.map((resume) => (
//                 <div className="card-container" key={resume._id} id={`resume-${resume._id}`}>
//                   <div className="card bg-light">
//                     <div className="card-body">
//                       <h5 className="card-title">{resume.name}</h5>
//                       <p className="card-text">{resume.description}</p>
//                     </div>
//                     <div className="button-row">
//                       <button className="btn1" onClick={() => handleView(resume._id)}>
//                         <i className="bi bi-binoculars-fill"></i> View
//                       </button>
//                       <div className="dropdown">
//                         <button
//                           className="btn1 dropdown-toggle"
//                           type="button"
//                           id="dropdownMenuButton"
//                           data-toggle="dropdown"
//                           aria-haspopup="true"
//                           aria-expanded="false"
//                         >
//                           <i className="bi bi-cloud-arrow-down-fill"></i> Download
//                         </button>
//                         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                           <button className="dropdown-item" onClick={() => handleDownload(resume, "pdf")}>
//                             PDF
//                           </button>
//                           <button className="dropdown-item" onClick={() => handleDownload(resume, "png")}>
//                             PNG
//                           </button>
//                           <button className="dropdown-item" onClick={() => handleDownload(resume, "jpg")}>
//                             JPG
//                           </button>
//                           <button className="dropdown-item" onClick={() => handleDownload(resume, "docx")}>
//                             DOCX
//                           </button>
//                         </div>
//                       </div>
//                       <button className="btn1" style={{ backgroundColor: "red" }}>
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
