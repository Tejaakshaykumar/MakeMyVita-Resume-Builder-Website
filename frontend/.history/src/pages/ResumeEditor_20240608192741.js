import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ResumePreview from '../components/ResumePreview';

const ResumeEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState({
    title: '',
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    workExperience: [],
    education: [],
    skills: [],
    projects: [],
    achievements: []
  });

  useEffect(() => {
    if (id) {
      const fetchResume = async () => {
        try {
          const response = await axios.get(`/api/resumes/${id}`);
          setResumeData(response.data);
        } catch (error) {
          console.error('Error fetching resume:', error);
        }
      };
      
      fetchResume();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/resumes/${id}`, resumeData);
      } else {
        await axios.post('/api/resumes', resumeData);
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={resumeData.title} 
          onChange={handleChange} 
          placeholder="Resume Title" 
        />
        <input 
          type="text" 
          name="personalInfo.name" 
          value={resumeData.personalInfo.name} 
          onChange={handleChange} 
          placeholder="Name" 
        />
        <input 
          type="text" 
          name="personalInfo.email" 
          value={resumeData.personalInfo.email} 
          onChange={handleChange} 
          placeholder="Email" 
        />
        <input 
          type="text" 
          name="personalInfo.phone" 
          value={resumeData.personalInfo.phone} 
          onChange={handleChange} 
          placeholder="Phone" 
        />
        <input 
          type="text" 
          name="personalInfo.address" 
          value={resumeData.personalInfo.address} 
          onChange={handleChange} 
          placeholder="Address" 
        />
        {/* Add other fields for workExperience, education, skills, projects, achievements */}
        <button type="submit">Save Resume</button>
      </form>
      <ResumePreview resumeData={resumeData} />
    </div>
  );
};

export default ResumeEditor;
