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
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';
import Temp2 from '../templates/Temp2';

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
  const [currentStep, setCurrentStep] = useState(0);
  
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

  const [ResumeDetails,setResumeDetails] = useState({
    ResumeName:'',
    Description:'',
    selectedTemplate:''
  })
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
      school: '',
      degree: '',
      fieldOfStudy: '',
      graduationYear: '',
      cgpa: ''
    }
  ]);

  const [skills, setSkills] = useState({
    courses: [''],
    techSkills: ['']
  });

  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      projectName: '',
      projectDescription: '',
      projectLink: '',
      submissionDate: ''
    }
  ]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value
    });
  };

  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };



  return (
    <div className="resume-editor">
      <div className='editor-top'>
      {/* <Roadmap steps={steps} currentStep={currentStep} /> */}
      </div>
      <div className='editor-temp'>
      {currentStep === 0 && <Step1Template goToNextStep={goToNextStep} handleChange={handleChange} ResumeDetails={ResumeDetails} />}
      </div>
      <div className='editor-steps'>
       <div className='steps'>
       {currentStep === 1 && <Step2PersonalDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} handleChange={handleChange} imageSrc={imageSrc} handleImageUpload={handleImageUpload}/> }
      {currentStep === 2 && <Step3EducationDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} educationDetails={educationDetails} setEducationDetails={setEducationDetails}/>}
      {currentStep === 3 && <Step4Skills goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} skills={skills} setSkills={setSkills}/>}
      {currentStep === 4 && <Step5Experience goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} experiences={experiences} setExperiences={setExperiences}/>}
      {currentStep === 5 && <Step6Projects goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} projects={projects} setProjects={setProjects} />}
      {currentStep === 6 && <Step7AdditionalSections goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
      {currentStep === 7 && <Step8Finish goToPreviousStep={goToPreviousStep} />}
      </div> 
        <div className='steps'>
        {currentStep !== 0  && <Temp6 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
        </div>
      </div>
    </div>
  );
}

export default ResumeEditor;


