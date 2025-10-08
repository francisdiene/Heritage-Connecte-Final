// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

// 🛑 COMMENTEZ L'IMPORTATION DU CONTEXTE POUR LE DÉVERROUILLAGE
// import { LanguageProvider } from './contexts/LanguageContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 🛑 AFFICHER App DIRECTEMENT SANS LE PROVIDER */}
    {/* <LanguageProvider> */}
      <App />
    {/* </LanguageProvider> */}
  </React.StrictMode>
);

reportWebVitals();