import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResumeContext.Provider>
  <AuthProvider>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </AuthProvider>
  </ResumeContext.Provider>
);


reportWebVitals();
