// frontend/src/App.js

import React from 'react';
// BrowserRouter est renommé Router pour la clarté.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORTS DES PAGES
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import OeuvrePage from './pages/OeuvrePage';
import GalleryPage from './pages/GalleryPage'; 

function App() {
  return (
    // Le Router enveloppe toute l'application pour gérer la navigation
    <Router> 
      <div className="App">
        {/* Les Routes définissent les chemins d'accès */}
        <Routes> 
          {/* Page d'accueil (chemin par défaut) */}
          <Route path="/" element={<HomePage />} /> 
          
          {/* Page de Scan */}
          <Route path="/scan" element={<ScanPage />} /> 
          
          {/* Page de l'Œuvre (avec paramètre dynamique :id_qr) */}
          <Route path="/oeuvre/:id_qr" element={<OeuvrePage />} />
          
          {/* Page de la Galerie Photos (nouvelle) */}
          <Route path="/galerie" element={<GalleryPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

// Export du composant principal
export default App;