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

// import './ResumeView.css';

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
    return <div>Loading...</div>;
  }
  console.log(resume.)
  const renderTemplate = () => {
    const props = {
      personalDetails: resume.personalDetails,
      imageSrc: resume.imageSrc ? `http://localhost:5000/uploads/${resume.imageSrc}` : null,
      educationDetails: resume.educationDetails,
      skills: resume.skillDetails,
      experiences: resume.experienceDetails,
      projects: resume.projectDetails,
      courses:resume.courseDetails
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

  return (
    <div className="resume-view">
      {renderTemplate()}
    </div>
  );
}

export default ResumeView;

