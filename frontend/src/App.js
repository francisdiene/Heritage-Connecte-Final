// frontend/src/App.js

import React from 'react';
// Importation des composants du routeur
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORTS DES PAGES
// Assurez-vous que ces fichiers existent et sont inclus dans votre push
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import OeuvrePage from './pages/OeuvrePage';
import GalleryPage from './pages/GalleryPage'; 

function App() {
  return (
    // Le Router enveloppe toute l'application
    <Router> 
      <div className="App">
        {/* Les Routes définissent les chemins d'accès et les composants à rendre */}
        <Routes> 
          {/* Page d'accueil (chemin par défaut) */}
          <Route path="/" element={<HomePage />} /> 
          
          {/* Page de Scan */}
          <Route path="/scan" element={<ScanPage />} /> 
          
          {/* Page de l'Œuvre (avec paramètre dynamique pour l'ID QR) */}
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