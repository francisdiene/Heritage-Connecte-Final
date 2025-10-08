// frontend/src/pages/HomePage.js - CODE SÉCURISÉ AVEC IMAGE DE FOND ET QR CODE

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    
    const t = (key) => {
        if (key === 'general.app_title') return "Heritage Connecté";
        if (key === 'general.welcome_message') return "Plongez au cœur des trésors du Musée des Civilisations Noires.";
        if (key === 'general.scan_button') return "Scanner un QR Code";
        if (key === 'general.qr_cta') return "Scannez-moi pour la Démo !"; // Nouveau texte
        return key; 
    }; 
    
    const backgroundStyle = {
        backgroundImage: 'url(/image-02.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        color: 'white',
        padding: '20px'
    };
    
    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        padding: '50px', 
        borderRadius: '10px',
        maxWidth: '90%',
    };

    return (
        <div style={backgroundStyle}> 
            <div style={overlayStyle}> 
                <h1 style={{ color: 'white', fontSize: '2.5em' }}>{t('general.app_title')}</h1>
                <p style={{ fontSize: '1.4em', color: '#eee', marginBottom: '40px' }}>{t('general.welcome_message')}</p>
                
                {/* Conteneur des boutons */}
                <div style={{ marginTop: '20px', marginBottom: '40px' }}> {/* Marge inférieure ajoutée */}
                    <Link to="/scan" style={{ 
                        display: 'inline-block', 
                        padding: '12px 25px', 
                        backgroundColor: '#007bff', 
                        color: 'white', 
                        textDecoration: 'none', 
                        borderRadius: '5px', 
                        fontSize: '1.2em',
                        marginRight: '15px',
                        fontWeight: 'bold'
                    }}>
                        {t('general.scan_button')}
                    </Link>
                    
                    <Link to="/galerie" style={{ 
                        display: 'inline-block', 
                        padding: '12px 25px', 
                        backgroundColor: '#00a000', 
                        color: 'white', 
                        textDecoration: 'none', 
                        borderRadius: '5px', 
                        fontSize: '1.2em',
                        fontWeight: 'bold'
                    }}>
                        Photos Officielles
                    </Link>
                </div>

                {/* NOUVEAU : QR CODE */}
                <div style={{ marginTop: '30px' }}>
                    <p style={{ fontSize: '1.1em', color: 'white', marginBottom: '15px' }}>{t('general.qr_cta')}</p>
                    <Link to="/oeuvre/masque-sagesse-fix"> {/* Lien direct vers la démo du masque */}
                        <img 
                            src="/qr-masque-demo.png" 
                            alt="QR Code Masque Démo" 
                            style={{ 
                                width: '150px', // Taille du QR code
                                height: 'auto', 
                                border: '5px solid white', 
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }} 
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
};
export default HomePage;