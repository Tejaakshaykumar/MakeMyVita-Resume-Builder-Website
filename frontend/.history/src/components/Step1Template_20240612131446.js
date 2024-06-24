import React, { useState } from 'react';
import './Step1Template.css';

const templates = [
  { id: 1, name: 'Template 1', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },
  { id: 2, name: 'Template 2', tags: ['creative', 'colorful'], image: '/templates/data-entry-specialist-resume-example.png' },
  { id: 3, name: 'Template 3', tags: ['creative', 'colorful'], image: '/templates/designer_resume_template_thumbnail.png' },
  { id: 4, name: 'Template 4', tags: ['modern', 'professional'], image:'/templates/functional-resume-template.png' },
  { id: 5, name: 'Template 5', tags: ['creative', 'colorful'], image: '/templates/minimalist-resume-template.png' },
  { id: 6, name: 'Template 6', tags: ['creative', 'colorful'], image: '/templates/resume_design_photo01_021_cm--68.jpg' },
  { id: 7, name: 'Template 7', tags: ['modern', 'professional'], image:'/templates/Screenshot_20240530_135100_Chrome.jpg' },
  { id: 8, name: 'Template 8', tags: ['creative', 'colorful'], image: '/templates/Screenshot_20240530_135125_Chrome.jpg' },
  { id: 9, name: 'Template 9', tags: ['creative', 'colorful'], image: '/templates/Screenshot_20240530_135142_Chrome.jpg' },
  { id: 10, name: 'Template 10', tags: ['modern', 'professional'], image:'/templates/Screenshot_20240530_140954_Chrome.jpg' },
  { id: 11, name: 'Template 11', tags: ['creative', 'colorful'], image: '/templates/Screenshot_20240530_140959_Chrome.jpg' },
  { id: 12, name: 'Template 12', tags: ['creative', 'colorful'], image: '/templates/Screenshot_20240530_141030_Chrome.jpg' },
  { id: 13, name: 'Template 13', tags: ['modern', 'professional'], image:'/templates/Screenshot_20240530_141614_Chrome.jpg' },
  { id: 14, name: 'Template 14', tags: ['creative', 'colorful'], image: '/templates/Screenshot_20240530_141619_Chrome.jpg' },
  { id: 15, name: 'Template 15', tags: ['creative', 'colorful'], image: '/templates/Screenshot_20240530_141716_Chrome.jpg' },
  { id: 16, name: 'Template 16', tags: ['modern', 'professional'], image:'/templates/skill-based-resume-template.png'},
];

const Step1Template = ({ goToNextStep }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const filteredTemplates = templates.filter(template => 
    template.tags.some(tag => tag.includes(searchTerm.toLowerCase()))
  );

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="step-container">
      <h2>Select Template</h2>
      <div >
      <input 
        type="text"
        placeholder="Search templates..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="template-list">
        {filteredTemplates.map(template => (
          <div
            key={template.id}
            className={`template-item ${selectedTemplate === template ? 'selected' : ''}`}
            onClick={() => handleTemplateClick(template)}
          >
            <img src={template.image} alt={template.name} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
      <button onClick={goToNextStep} disabled={!selectedTemplate}>Next</button>
    </div>
  );
};

export default Step1Template;
