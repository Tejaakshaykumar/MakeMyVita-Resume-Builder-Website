import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import {ResumeProvider} from './store/ResumeContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
      <ResumeProvider>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </ResumeProvider>
  </AuthProvider>
);


reportWebVitals();
