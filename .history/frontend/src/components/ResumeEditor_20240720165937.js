import React, { useState } from 'react';
import Roadmap from './Roadmap';
import Step1Template from './Step1Template';
import Step2PersonalDetails from './Step2PersonalDetails';
import Step3EducationDetails from './Step3EducationDetails';
import Step4Skills from './Step4Skills';
import Step5Experience from './Step5Experience';
import Step6Projects from './Step6Projects';
import Step7AdditionalSections from './Step7AdditionalSections';
import Step8Finish from './Step8Finish';
import './ResumeEditor.css';
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
import { useNavigate } from 'react-router-dom';

const steps = [
  'Select Template',
  'Personal Details',
  'Education Details',
  'Courses/Tech Skills',
  'Experience',
  'Projects',
  'Additional Sections',
  'Finish'
];

function ResumeEditor() {
  const navigate=useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [ready,setReady]=useState(false);
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [ResumeDetails, setResumeDetails] = useState({
    name: '',
    description: '',
    templateNo: '',
    fontColor: '',
    fontFamily: '',
    templateColor:''
  });

  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    role: '',
    professionalEmail: '',
    personalEmail: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    website: '',
    linkedin: '',
    github: ''
  });

  const [educationDetails, setEducationDetails] = useState([
    {
      instituteName: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: '',
      cgpa: ''
    }
  ]);

  const [studentDetails, setStudentDetails] = useState({
    rollNo: '',
    degree:'',
    department: '',
    institute: ''
  });

  const [skills, setSkills] = useState([
    {
    skillName: '',
    proficiency: ''
  }
]);

  const [courses, setCourses] = useState([
    {
    skillName: '',
    proficiency: ''
  }
]);

  const [experiences, setExperiences] = useState([
    {
      companyName: '',
      jobTitle: '',
      jobDescription: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const [projects, setProjects] = useState([
    {
      projectName: '',
      projectDescription: '',
      projectLink: '',
      submitDate: ''
    }
  ]);
  
  const [additionalDetails, setAdditionalDetails] = useState([{ 
    sectionName: '', 
    descriptions: ['']
  }]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setResumeDetails ({
      ...ResumeDetails,
      [name]: value,
    });
  };

  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      
      Object.keys(personalDetails).forEach(key => {
        formData.append(key, personalDetails[key]);
      });

      if (imageFile) {
        formData.append('image', imageFile);
      }

      const personalDetailsResponse = await fetch('http://localhost:5000/api/personalDetails', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: formData
      })
      .then(async response => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }
        return response.json();
      })
    
      const personalDetailsData = await personalDetailsResponse;
  
      const educationDetailsPromises = educationDetails.map(detail =>
        fetch('http://localhost:5000/api/educationDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(detail)
        }).then(async response => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
      );
      const educationDetailsData = await Promise.all(educationDetailsPromises);
      
      const studentDetailsResponse = await fetch('http://localhost:5000/api/studentDetails', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(studentDetails)
      })
      .then(async response => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }
        return response.json();
      })
      
      const studentDetailsData = await studentDetailsResponse;

      const coursesPromises = courses.map(course =>
        fetch('http://localhost:5000/api/courseDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(course)
        }).then(async response => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
      );
      const coursesData = await Promise.all(coursesPromises);

      const skillsPromises = skills.map(skill =>
        fetch('http://localhost:5000/api/skillDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(skill)
        }).then(async response => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
      );
      const skillsData = await Promise.all(skillsPromises);

      const experiencesPromises = experiences.map(experience =>
        fetch('http://localhost:5000/api/experienceDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(experience)
        }).then(async response => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
      );
      const experiencesData = await Promise.all(experiencesPromises);

      const projectsPromises = projects.map(project =>
        fetch('http://localhost:5000/api/projectDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(project)
        }).then(async response => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
      );
      
      const projectsData = await Promise.all(projectsPromises);

      const additionalPromises = additionalDetails.map(section =>
        fetch('http://localhost:5000/api/additonalDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(section)
        }).then(async response => {
          if (!response.ok) {
            const text = await response.text();
            throw new Error(text);
          }
          return response.json();
        })
      );
      const additionalDetailsData = await Promise.all(additionalPromises);
      
  
      const resumeResponse = await fetch('http://localhost:5000/api/resumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...ResumeDetails,
          personalDetails: personalDetailsData._id,
          educationDetails: educationDetailsData.map(detail => detail._id),
          experienceDetails:experiencesData.map(detail => detail._id),
          courseDetails:coursesData.map(detail => detail._id),
          skillDetails:skillsData.map(detail => detail._id),
          projectDetails:projectsData.map(detail => detail._id),
          additionalDetails:additionalDetailsData.map(detail => detail._id),
          studentDetails:studentDetailsData._id
        })
      });
      if (!resumeResponse.ok) {
        const text = await resumeResponse.text();
        throw new Error(text);
      }
      const resumeData = await resumeResponse.json();
  
      console.log('Resume data:', resumeData);
      if(resumeResponse.ok){
        setReady(true);
      }
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  };  
  

  return (
    <div className="resume-editor">
      <div className='editor-top'>
        {/* <Roadmap steps={steps} currentStep={currentStep} /> */}
      </div>
      <div className='editor-temp'>
        {currentStep === 0 && <Step1Template goToNextStep={goToNextStep} handleChange1={handleChange1} ResumeDetails={ResumeDetails} setResumeDetails={setResumeDetails}/>}
      </div>
      <div className='editor-steps'>
        <div className='steps'>
          {currentStep === 1 && <Step2PersonalDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} handleChange={handleChange} imageSrc={imageSrc} handleImageUpload={handleImageUpload} personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>}
          {currentStep === 2 && <Step3EducationDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} educationDetails={educationDetails} setEducationDetails={setEducationDetails} studentDetails={studentDetails} setStudentDetails={setStudentDetails} />}
          {currentStep === 3 && <Step4Skills goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} skills={skills} setSkills={setSkills} courses={courses} setCourses={setCourses}/>}
          {currentStep === 4 && <Step5Experience goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} experiences={experiences} setExperiences={setExperiences}/>}
          {currentStep === 5 && <Step6Projects goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} projects={projects} setProjects={setProjects}/>}
          {currentStep === 6 && <Step7AdditionalSections goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} additionalDetails={additionalDetails} setAdditionalDetails={setAdditionalDetails}/>}
          {currentStep === 7 && <Step8Finish ready={ready} goToPreviousStep={goToPreviousStep} handleSubmit={handleSubmit} ResumeDetails={ResumeDetails} setResumeDetails={setResumeDetails} />}
        </div>
        <div className='steps'>
          {currentStep !== 0 && ResumeDetails.templateNo === 1 && <Temp1 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 2 && <Temp2 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 3 && <Temp3 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 4 && <Temp4 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 5 && <Temp5 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 6 && <Temp6 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 7 && <Temp7 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 8 && <Temp8 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 9 && <Temp9 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 10 && <Temp10 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 11 && <Temp11 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 12 && <Temp12 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 13 && <Temp13 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 14 && <Temp14 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 15 && <Temp15 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
          {currentStep !== 0 && ResumeDetails.templateNo === 16 && <Temp16 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} courses={courses} experiences={experiences} projects={projects} studentDetails={studentDetails} ResumeDetails={ResumeDetails} additionalDetails={additionalDetails}/>}
        </div>
      </div>
    </div>
  );
}

export default ResumeEditor;

