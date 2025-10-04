// frontend/src/index.js

import React from 'react';
// 1. Changement : Importe les fonctionnalités client de React 18
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css'; 

// 2. Changement : Crée une "racine" pour l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// 3. Changement : Utilise la méthode render de cette racine
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);