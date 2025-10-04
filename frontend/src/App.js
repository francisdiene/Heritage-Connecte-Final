// frontend/src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import OeuvrePage from './pages/OeuvrePage';

// Composants
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/oeuvre/:id_qr" element={<OeuvrePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;