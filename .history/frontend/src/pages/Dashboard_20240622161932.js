import React, { useEffect, useState } from "react";
import "./pagestyles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useResume } from "../store/ResumeContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

function Dashboard() {
  const navigate = useNavigate();
  const { LogoutUser, user, loading } = useAuth();
  const { resumes, fetchResumes, clearResumes } = useResume();

  const handleView = (resumeId) => {
    navigate(`/resume/${resumeId}`);
  };

  const handleDownload = async (resumeId, resume, format) => {
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
        } else if (format === "docx") {
          
          const sections = [];

          // Personal Details Section
          sections.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: "Personal Details",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Name: ${resume.personalDetails.firstName} ${resume.personalDetails.lastName}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Professional Email: ${resume.personalDetails.professionalEmail}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Phone: ${resume.personalDetails.phone}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `City: ${resume.personalDetails.city}, State: ${resume.personalDetails.state}, Country: ${resume.personalDetails.country}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Website: ${resume.personalDetails.website}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `LinkedIn: ${resume.personalDetails.linkedin}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `GitHub: ${resume.personalDetails.github}`,
                }),
              ],
            })
          );

          // Education Details Section
          if (resume.educationDetails && resume.educationDetails.length > 0) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Education Details",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              ...resume.educationDetails.map((edu) => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Institute: ${edu.instituteName}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Degree: ${edu.degree}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Field of Study: ${edu.fieldOfStudy}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Graduation Year: ${edu.graduationYear}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `CGPA: ${edu.cgpa}`,
                    }),
                  ],
                }),
              ])
            );
          }
          
          //skills section
          if (resume.skills && resume.skills.length > 0) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Skills",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              ...resume.skills.map((skill) => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Skill: ${skill.skillName}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Proficiency: ${skill.proficiency}`,
                    }),
                  ],
                }),
              ])
            );
          }

          //courses section
          if (resume.courses && resume.courses.length > 0) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Skills",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              ...resume.courses.map((skill) => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Skill: ${skill.skillName}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Proficiency: ${skill.proficiency}`,
                    }),
                  ],
                }),
              ])
            );
          }

          // Experience Section
          if (resume.experienceDetails && resume.experienceDetails.length > 0) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Experience",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              ...resume.experienceDetails.map((exp) => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Company: ${exp.companyName}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Job Title: ${exp.jobTitle}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Job Description: ${exp.jobDescription}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Start Date: ${exp.startDate}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `End Date: ${exp.endDate}`,
                    }),
                  ],
                }),
              ])
            );
          }

          // Project Details Section
          if (resume.projectDetails && resume.projectDetails.length > 0) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Projects",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              ...resume.projectDetails.map((project) => [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Project Name: ${project.projectName}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Project Description: ${project.projectDescription}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Project Link: ${project.projectLink}`,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Submit Date: ${project.submitDate}`,
                    }),
                  ],
                }),
              ])
            );
          }

          const doc = new Document({
            sections: [
              {
                properties: {},
                children: sections.flat(),
              },
            ],
          });

          Packer.toBlob(doc).then((blob) => {
            saveAs(blob, "resume.docx");
          });
        }
      }
    }, 1000);
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
                      <div className="dropdown">
                        <button
                          className="btn1 dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bi bi-cloud-arrow-down-fill"></i>{" "}
                          Download
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              handleDownload(resume._id, resume, "pdf")
                            }
                          >
                            PDF
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              handleDownload(resume._id, resume, "png")
                            }
                          >
                            PNG
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              handleDownload(resume._id, resume, "jpg")
                            }
                          >
                            JPG
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              handleDownload(resume._id, resume, "docx")
                            }
                          >
                            DOCX
                          </button>
                        </div>
                      </div>
                      <button
                        className="btn1"
                        style={{ backgroundColor: "red" }}
                        onClick={() => handleDelete(resume._id)
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
