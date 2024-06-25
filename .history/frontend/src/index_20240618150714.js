import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider></AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
