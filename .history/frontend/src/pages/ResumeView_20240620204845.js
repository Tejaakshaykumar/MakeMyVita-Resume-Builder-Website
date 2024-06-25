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
        {/* Render resume details based on the fetched resume */}
      </div>
    </div>
  );
}

export default ResumeView;
