// frontend/src/pages/HomePage.js

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

// frontend/src/pages/HomePage.js

// ... imports existants

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <div className="home-background"> 
        <div style={{ 
            // ... styles existants (textAlign: 'center', etc.)
            textAlign: 'center', 
            padding: '50px', 
            minHeight: '100vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)' 
        }}>
            <h1 style={{ color: 'white' }}>{t('general.app_title')}</h1>
            <p style={{ fontSize: '1.2em', color: 'white' }}>{t('general.welcome_message')}</p>
            
            {/* Conteneur des boutons pour les aligner */}
            <div style={{ marginTop: '20px' }}>
                {/* Bouton SCAN existant */}
                <Link to="/scan" style={{ 
                    display: 'inline-block', 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '5px', 
                    fontSize: '1.1em',
                    marginRight: '15px' // Marge pour séparer les boutons
                }}>
                    {t('general.scan_button')}
                </Link>
                
                {/* Bouton GALERIE NOUVEAU */}
                <Link to="/galerie" style={{ 
                    display: 'inline-block', 
                    padding: '10px 20px', 
                    backgroundColor: '#00a000', // Couleur différente pour le contraste
                    color: 'white', 
                    textDecoration: 'none', 
                    borderRadius: '5px', 
                    fontSize: '1.1em'
                }}>
                    Photos Officielles
                </Link>
            </div>
        </div>
    </div>
  );
};
export default HomePage;