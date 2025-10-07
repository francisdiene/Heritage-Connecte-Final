// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';

// Ligne critique : importe le CSS global. Le CSS doit y être.
import './index.css'; 

import App from './App';
import reportWebVitals from './reportWebVitals';

// Import du Context Multilingue
import { LanguageProvider } from './contexts/LanguageContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TOUTE L'APPLICATION EST DANS LE LanguageProvider */}
    <LanguageProvider> 
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();