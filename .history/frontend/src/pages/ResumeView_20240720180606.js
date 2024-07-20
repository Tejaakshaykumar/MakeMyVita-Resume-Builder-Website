import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Temp1 from '../templates/Temp1';
import Temp2 from '../templates/Temp2';
import Temp3 from '../templates/Temp3';
import Temp4 from '../templates/Temp4';
import Temp5 from '../templates/Temp5';
import Temp6 from '../templates/Temp6';
import Temp7 from '../templates/Temp7';
import Temp8 from '../templates/Temp8';
import Temp9 from '../templates/Temp9';
import Temp10 from '../templates/Temp10';
import Temp11 from '../templates/Temp11';
import Temp12 from '../templates/Temp12';
import Temp13 from '../templates/Temp13';
import Temp14 from '../templates/Temp14';
import Temp15 from '../templates/Temp15';
import Temp16 from '../templates/Temp16';
import { useResume } from '../store/ResumeContext';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";


function ResumeView() {
  const { resumeId } = useParams();
  const { resumes } = useResume();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/resumes/${resumeId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setResume(data);
          console.log(data)
        } else {
          console.error('Failed to fetch resume');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchResume();
  }, [resumeId,resumes]);

  if (!resume) {
    return <div>
      <div style={{ textAlign: 'center', marginTop: '50px',}}>
      <img
        src="https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif"
        alt="Loading..."
        width="900"
        height="700"
        style={{ border: 'none' }}
      />
    </div>
    </div>;
  }
  const imageSrc = resume.personalDetails.image ? `http://localhost:5000/${resume.personalDetails.image.replace(/\\/g, '/')}` : null;
  console.log({msg:resume.fontColor})
  const renderTemplate = () => {
    const props = {
      personalDetails: resume.personalDetails,
      imageSrc:imageSrc, 
      educationDetails: resume.educationDetails,
      skills: resume.skillDetails,
      experiences: resume.experienceDetails,
      projects: resume.projectDetails,
      courses:resume.courseDetails,
      Resume:resume,
      additionalDetails:resume.additionalDetails,
      studentDetails:resume.studentDetails
    };


    switch (resume.templateNo) {
      case 1:
        return <Temp1 {...props} />;
      case 2:
        return <Temp2 {...props} />;
      case 3:
        return <Temp3 {...props} />;
      case 4:
        return <Temp4 {...props} />;
      case 5:
        return <Temp5 {...props} />;
      case 6:
        return <Temp6 {...props} />;
      case 7:
        return <Temp7 {...props} />;
      case 8:
        return <Temp8 {...props} />;
      case 9:
        return <Temp9 {...props} />;
      case 10:
        return <Temp10 {...props} />;
      case 11:
        return <Temp11 {...props} />;
      case 12:
        return <Temp12 {...props} />;
      case 13:
        return <Temp13 {...props} />;
      case 14:
        return <Temp14 {...props} />;
      case 15:
        return <Temp15 {...props} />;
      case 16:
        return <Temp16 {...props} />;
      default:
        return <div>Invalid template number</div>;
    }
  };
  const handleDownload =async (format)=>{
    const resumeElement = document.getElementById('resume');

    if (resumeElement) {
      const canvas = await html2canvas(resumeElement, { scale: 3 });
      const imgData = canvas.toDataURL("image/png");

      if (format === "pdf") {
        const width = 2480; 
      const height = 3508;

      const pdf = new jsPDF({
        unit: 'px', 
        format: [width, height] 
      });

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const x = (width - imgWidth) / 2;
      const y = (height - imgHeight) / 2;

      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
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

        if (resume.courses && resume.courses.length > 0) {
          sections.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: "Courses",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            ...resume.courses.map((course) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Course: ${course.courseName}`,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Proficiency: ${course.proficiency}`,
                  }),
                ],
              }),
            ])
          );
        }

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
  }
  return (
    <div className="resume" id="resume-content" style={{paddingTop:"1in",minHeight:'130vh'}}>
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
                              handleDownload("png")
                            }
                          >
                            PNG
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              handleDownload("jpg")
                            }
                          >
                            JPG
                          </button>
                          <button
                            className="dropdown-item"
                            onClick={() =>
                              handleDownload("docx")
                            }
                          >
                            DOCX
                          </button>
                        </div>
                      </div>
                      {renderTemplate()}
    </div>
  );
}

export default ResumeView;


