// frontend/src/pages/HomePage.js - CODE FINAL AVEC FORMULAIRE
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm'; // 🛑 L'IMPORTATION EST CORRECTE

const HomePage = () => {
    
    // Logique de secours pour le texte (FR fixe)
    const t = (key) => {
        if (key === 'general.app_title') return "Heritage Connecté";
        if (key === 'general.welcome_message') return "Plongez au cœur des trésors du Musée des Civilisations Noires.";
        if (key === 'general.scan_button') return "Scanner un QR Code";
        return key; 
    }; 
    
    // Style de l'arrière-plan intégrant l'image (Image-02.jpg)
    const backgroundStyle = {
        backgroundImage: 'url(/image-02.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        // 🛑 CORRECTION ICI : Aligner le contenu au début pour laisser de la place en bas
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        textAlign: 'center',
        color: 'white',
        padding: '50px 20px' // Ajout de padding supérieur pour l'esthétique
    };
    
    // Style de la superposition sombre pour la lisibilité du texte
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
                <div style={{ marginTop: '20px' }}>
                    {/* Bouton SCAN */}
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
                    
                    {/* Bouton GALERIE */}
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
            </div>
            
            {/* 🛑 APPEL DU COMPOSANT : Le formulaire sera visible en dessous */}
            <ContactForm />
            
        </div>
    );
};
export default HomePage;