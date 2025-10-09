// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importez vos pages
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import GalleryPage from './pages/GalleryPage';
import OeuvrePage from './pages/OeuvrePage'; 
import AdminPage from './pages/AdminPage'; // <-- NOUVEL IMPORT ADMIN
import NotFound from './pages/NotFound'; // Page d'erreur

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          {/* 1. ROUTE RACINE : La page d'accueil par défaut */}
          <Route path="/" element={<HomePage />} />
          
          {/* 2. ROUTES PRINCIPALES DE L'APPLICATION */}
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          
          {/* 3. ROUTE DYNAMIQUE : Pour l'affichage des œuvres (via scan ou galerie) */}
          <Route path="/oeuvre/:id_qr" element={<OeuvrePage />} />
          
          {/* 4. ROUTE ADMIN : Pour le bouton "Se Connecter" */}
          <Route path="/admin" element={<AdminPage />} /> 

          {/* 5. ROUTE CATCH-ALL : Affiché si aucune autre route ne correspond */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;