import React, { useState } from 'react';
import './Step1Template.css';

const templates = [
  { id: 1, name: 'Template 1', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },
  { id: 2, name: 'Template 2', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 3, name: 'Template 3', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 1, name: 'Template 4', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },
  { id: 2, name: 'Template 5', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 3, name: 'Template 6', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 1, name: 'Template 7', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },
  { id: 2, name: 'Template 8', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 3, name: 'Template 9', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 1, name: 'Template 10', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },
  { id: 2, name: 'Template 11', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 3, name: 'Template 12', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 1, name: 'Template 13', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },
  { id: 2, name: 'Template 14', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 3, name: 'Template 15', tags: ['creative', 'colorful'], image: 'template2.png' },
  { id: 1, name: 'Template 16', tags: ['modern', 'professional'], image:'/templates/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg' },

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
      <input
        type="text"
        placeholder="Search templates..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
