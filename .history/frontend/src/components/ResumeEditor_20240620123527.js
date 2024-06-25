// import React, { useState } from 'react';
// import Roadmap from './Roadmap';
// import Step1Template from './Step1Template';
// import Step2PersonalDetails from './Step2PersonalDetails';
// import Step3EducationDetails from './Step3EducationDetails';
// import Step4Skills from './Step4Skills';
// import Step5Experience from './Step5Experience';
// import Step6Projects from './Step6Projects';
// import Step7AdditionalSections from './Step7AdditionalSections';
// import Step8Finish from './Step8Finish';
// import './ResumeEditor.css';
// import Temp1 from '../templates/Temp1';
// import Temp2 from '../templates/Temp2';
// import Temp3 from '../templates/Temp3';
// import Temp4 from '../templates/Temp4';
// import Temp5 from '../templates/Temp5';
// import Temp6 from '../templates/Temp6';
// import Temp7 from '../templates/Temp7';
// import Temp8 from '../templates/Temp8';
// import Temp9 from '../templates/Temp9';
// import Temp10 from '../templates/Temp10';
// import Temp11 from '../templates/Temp11';
// import Temp12 from '../templates/Temp12';
// import Temp13 from '../templates/Temp13';
// import Temp14 from '../templates/Temp14';
// import Temp15 from '../templates/Temp15';
// import Temp16 from '../templates/Temp16';

// const steps = [
//   'Select Template',
//   'Personal Details',
//   'Education Details',
//   'Courses/Tech Skills',
//   'Experience',
//   'Projects',
//   'Additional Sections',
//   'Finish'
// ];

// function ResumeEditor() {
//   const [currentStep, setCurrentStep] = useState(0);
  
//   const goToNextStep = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const goToPreviousStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const [ResumeDetails,setResumeDetails] = useState({
//     ResumeName:'',
//     Description:'',
//     selectedTemplate:''
//   })
//   const [personalDetails, setPersonalDetails] = useState({
//     firstName: '',
//     lastName: '',
//     role: '',
//     professionalEmail: '',
//     personalEmail: '',
//     phone: '',
//     city: '',
//     state: '',
//     country: '',
//     website: '',
//     linkedin: '',
//     github: ''
//   });

//   const [educationDetails, setEducationDetails] = useState([
//     {
//       school: '',
//       degree: '',
//       fieldOfStudy: '',
//       graduationYear: '',
//       cgpa: ''
//     }
//   ]);

//   const [skills, setSkills] = useState({
//     courses: [''],
//     techSkills: ['']
//   });

//   const [experiences, setExperiences] = useState([
//     {
//       companyName: '',
//       jobTitle: '',
//       jobDescription: '',
//       startDate: '',
//       endDate: '',
//     },
//   ]);

//   const [projects, setProjects] = useState([
//     {
//       projectName: '',
//       projectDescription: '',
//       projectLink: '',
//       submissionDate: ''
//     }
//   ]);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPersonalDetails({
//       ...personalDetails,
//       [name]: value
//     });
//   };

//   const [imageSrc, setImageSrc] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageSrc(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };



//   return (
//     <div className="resume-editor">
//       <div className='editor-top'>
//       {/* <Roadmap steps={steps} currentStep={currentStep} /> */}
//       </div>
//       <div className='editor-temp'>
//       {currentStep === 0 && <Step1Template goToNextStep={goToNextStep} handleChange={handleChange} ResumeDetails={ResumeDetails} setResumeDetails={setResumeDetails}/>}
//       </div>
//       <div className='editor-steps'>
//        <div className='steps'>
//        {currentStep === 1 && <Step2PersonalDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} handleChange={handleChange} imageSrc={imageSrc} handleImageUpload={handleImageUpload}/> }
//       {currentStep === 2 && <Step3EducationDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} educationDetails={educationDetails} setEducationDetails={setEducationDetails}/>}
//       {currentStep === 3 && <Step4Skills goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} skills={skills} setSkills={setSkills}/>}
//       {currentStep === 4 && <Step5Experience goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} experiences={experiences} setExperiences={setExperiences}/>}
//       {currentStep === 5 && <Step6Projects goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} projects={projects} setProjects={setProjects} />}
//       {currentStep === 6 && <Step7AdditionalSections goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}
//       {currentStep === 7 && <Step8Finish goToPreviousStep={goToPreviousStep} />}
//       </div> 
//         <div className='steps'>
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===1 && <Temp1 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===2 && <Temp2 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===3 && <Temp3 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===4 && <Temp4 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===5 && <Temp5 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===6 && <Temp6 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===7 && <Temp7 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===8 && <Temp8 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===9 && <Temp9 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===10 && <Temp10 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===11 && <Temp11 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===12 && <Temp12 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===13 && <Temp13 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===14 && <Temp14 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===15 && <Temp15 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
//         {currentStep !== 0  && ResumeDetails.selectedTemplate===16 && <Temp16 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeEditor;

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
import { useAuth } from '../store/auth';

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

  const [ResumeDetails, setResumeDetails] = useState({
    ResumeName: '',
    Description: '',
    selectedTemplate: ''
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

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setResumeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
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
  
  const {storeTokenInLS} = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const token = localStorage.getItem('token');  // Assuming you have the token stored in localStorage

      const personalDetailsResponse = await fetch('http://localhost:5000/api/personalDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'x-auth-token': token
        },
        console.log("login form",personalDetailsResponse);

        body: JSON.stringify(personalDetailsResponse)
      });
      if(personalDetailsResponse.ok){

      }
      const personalDetailsData = await personalDetailsResponse.json();

      const educationDetailsPromises = educationDetails.map(detail => 
        fetch('http://localhost:5000/api/educationDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify(detail)
        }).then(response => response.json())
      );
      const educationDetailsData = await Promise.all(educationDetailsPromises);

      // const skillsResponse = await fetch('http://localhost:5000/api/skills', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'x-auth-token': token
      //   },
      //   body: JSON.stringify(skills)
      // });
      // const skillsData = await skillsResponse.json();

      // const experiencesPromises = experiences.map(detail => 
      //   fetch('http://localhost:5000/api/experiences', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'x-auth-token': token
      //     },
      //     body: JSON.stringify(detail)
      //   }).then(response => response.json())
      // );
      // const experiencesData = await Promise.all(experiencesPromises);

      // const projectsPromises = projects.map(detail => 
      //   fetch('http://localhost:5000/api/projects', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'x-auth-token': token
      //     },
      //     body: JSON.stringify(detail)
      //   }).then(response => response.json())
      // );
      // const projectsData = await Promise.all(projectsPromises);

      const resumeResponse = await fetch('http://localhost:5000/api/resumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({
          ...ResumeDetails,
          personalDetails: personalDetailsData._id,
          educationDetails: educationDetailsData.map(detail => detail._id),
          // skills: skillsData._id,
          // experiences: experiencesData.map(detail => detail._id),
          // projects: projectsData.map(detail => detail._id)
        })
      });
      const resumeData = await resumeResponse.json();
      console.log(resumeData);

    } catch (error) {
      console.error('Error:', error);
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
          {currentStep === 2 && <Step3EducationDetails goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} educationDetails={educationDetails} setEducationDetails={setEducationDetails}/>}
          {currentStep === 3 && <Step4Skills goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} skills={skills} setSkills={setSkills}/>}
          {currentStep === 4 && <Step5Experience goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} experiences={experiences} setExperiences={setExperiences}/>}
          {currentStep === 5 && <Step6Projects goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} projects={projects} setProjects={setProjects}/>}
          {currentStep === 6 && <Step7AdditionalSections goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep}/>}
          {currentStep === 7 && <Step8Finish goToPreviousStep={goToPreviousStep} handleSubmit={handleSubmit}/>}
        </div>
        <div className='steps'>
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 1 && <Temp1 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 2 && <Temp2 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 3 && <Temp3 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 4 && <Temp4 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 5 && <Temp5 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 6 && <Temp6 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 7 && <Temp7 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 8 && <Temp8 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 9 && <Temp9 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 10 && <Temp10 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 11 && <Temp11 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 12 && <Temp12 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 13 && <Temp13 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 14 && <Temp14 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 15 && <Temp15 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
          {currentStep !== 0 && ResumeDetails.selectedTemplate === 16 && <Temp16 personalDetails={personalDetails} imageSrc={imageSrc} educationDetails={educationDetails} skills={skills} experiences={experiences} projects={projects}/>}
        </div>
      </div>
    </div>
  );
}

export default ResumeEditor;

