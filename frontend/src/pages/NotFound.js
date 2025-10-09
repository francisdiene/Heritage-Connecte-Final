// frontend/src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ color: '#dc3545', fontSize: '3em' }}>404 - Page Non Trouvée</h1>
      <p style={{ fontSize: '1.2em', color: '#555', marginBottom: '40px' }}>
        Désolé, l'URL demandée n'existe pas sur cette application.
      </p>
      
      <Link to="/" style={{ 
        padding: '10px 20px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        Retour à l'Accueil
      </Link>
    </div>
  );
};
export default NotFound;