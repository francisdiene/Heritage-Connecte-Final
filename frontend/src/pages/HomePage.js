// frontend/src/pages/HomePage.js

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    // 1. Conteneur principal avec la classe CSS pour l'image de fond
    <div className="home-background"> 
        {/* 2. Filtre Overlay pour la lisibilité et contenu centré */}
        <div style={{ 
            textAlign: 'center', 
            padding: '50px', 
            minHeight: '100vh', // Assure que le contenu prend toute la hauteur de la vue
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Centre le contenu verticalement
            backgroundColor: 'rgba(0, 0, 0, 0.4)' // Overlay semi-transparent noir (40%)
        }}>
            <h1 style={{ color: 'white' }}>{t('general.app_title')}</h1>
            <p style={{ fontSize: '1.2em', color: 'white' }}>{t('general.welcome_message')}</p>
            
            {/* Le lien Scan (le style existant est conservé) */}
            <Link to="/scan" style={{ 
                display: 'inline-block', 
                marginTop: '20px', 
                padding: '10px 20px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontSize: '1.1em' 
            }}>
                {t('general.scan_button')}
            </Link>
        </div>
    </div>
  );
};
export default HomePage;