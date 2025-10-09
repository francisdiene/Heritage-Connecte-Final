// frontend/src/pages/AdminPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <h1 style={{ color: '#007bff' }}>Tableau de Bord Administrateur (Démo)</h1>
            <p style={{ fontSize: '1.2em', color: '#555', marginBottom: '40px' }}>
                Cette page simule l'espace réservé après une connexion réussie. <br />
                Ici, un administrateur pourrait gérer les utilisateurs, les œuvres ou les quiz.
            </p>
            
            <Link to="/" style={{ 
                padding: '10px 20px', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold'
            }}>
                Déconnexion
            </Link>
        </div>
    );
};
export default AdminPage;