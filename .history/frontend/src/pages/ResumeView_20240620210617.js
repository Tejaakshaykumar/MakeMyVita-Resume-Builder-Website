import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './ResumeView.css';

function ResumeView() {
  const { resumeId } = useParams();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/resumes/${resumeId}`, {
            method :"GET",
            headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setResume(data);
        } else {
          console.error('Failed to fetch resume');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchResume();
  }, [resumeId]);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resume-view">
      <h1>{resume.name}</h1>
      <p>{resume.description}</p>
      <div className="resume-details">
        <section>
          <h2>Personal Details</h2>
          <p>Email: {resume.personalDetails.firstName}</p>
          <p>Phone: {resume.personalDetails.phone}</p>
          <p>Address: {resume.personalDetails.city}</p>
        </section>
        <section>
          <h2>Education</h2>
          {resume.educationDetails.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
              <p> {edu.graduationYear}</p>
            </div>
          ))}
        </section>
        {/* You can add more sections like Work Experience, Skills, etc., as needed */}
      </div>
    </div>
  );
}

export default ResumeView;
