import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import {ResumeProvider} from './store/ResumeContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResumeProvider>
  <AuthProvider>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </AuthProvider>
);


reportWebVitals();
