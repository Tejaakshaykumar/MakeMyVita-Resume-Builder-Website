import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import {ResumeContext} from './store/ResumeContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResumeContext>
  <AuthProvider>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </AuthProvider>
  </ResumeContext>
);


reportWebVitals();
