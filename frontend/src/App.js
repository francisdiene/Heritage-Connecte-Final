// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importez tous les composants de page
import HomePage from './pages/HomePage';
import OeuvrePage from './pages/OeuvrePage';
import GaleriePage from './pages/GaleriePage';
import FavoritesPage from './pages/FavoritesPage';
import ScanPage from './pages/ScanPage'; 
import AdminPage from './pages/AdminPage'; // 🛑 NOUVEL IMPORT DE LA PAGE DE LOGIN ADMIN
import NotFound from './pages/NotFound'; // Importez votre composant NotFound pour la gestion des erreurs

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes principales de l'application */}
        <Route path="/" element={<HomePage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="/favoris" element={<FavoritesPage />} />
        <Route path="/scan" element={<ScanPage />} /> 

        {/* Route dynamique pour les œuvres */}
        <Route path="/oeuvre/:id_qr" element={<OeuvrePage />} />

        {/* 🛑 ROUTE D'ADMINISTRATION POUR LE LOGIN (admin / admin123) */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Route de secours (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;