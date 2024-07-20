import React, { createContext, useContext, useState, useEffect } from 'react';

const ResumeContext = createContext();


export const ResumeProvider = ({ children }) => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResumes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https:localhost:5000/api/resumes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResumes(data);
      } else {
        console.error('Failed to fetch resumes');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const clearResumes = () => {
    setResumes([]); 
  };

  return (
    <ResumeContext.Provider value={{ resumes, setResumes, fetchResumes, loading, clearResumes }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  return useContext(ResumeContext);
};
