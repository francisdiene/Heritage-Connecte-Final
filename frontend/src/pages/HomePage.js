// frontend/src/pages/HomePage.js - CODE FINAL STABLE ET COMPLET
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm'; 

const HomePage = () => {
    
    // Logique de secours pour le texte (FR fixe)
    const t = (key) => {
        if (key === 'general.app_title') return "Heritage Connecté";
        if (key === 'general.welcome_message') return "Plongez au cœur des trésors du Musée des Civilisations Noires.";
        if (key === 'general.scan_button') return "Scanner un QR Code";
        return key; 
    }; 
    
    // Style de l'arrière-plan
    const backgroundStyle = {
        backgroundImage: 'url(/image-02.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        textAlign: 'center',
        color: 'white',
        padding: '20px'
    };
    
    // Style de la superposition sombre
    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        padding: '50px', 
        borderRadius: '10px',
        maxWidth: '90%',
        marginTop: '20px'
    };

    // Style pour le conteneur du formulaire en bas à droite
    const formContainerStyle = {
        alignSelf: 'flex-end', 
        position: 'fixed', 
        bottom: '30px', 
        right: '30px', 
        zIndex: 1000, 
        maxWidth: '350px',
    };

    return (
        <div style={backgroundStyle}> 
            
            {/* 1. BOUTON CONNEXION (en haut à droite) */}
            <div style={{ alignSelf: 'flex-end', width: '100%', maxWidth: '90%', textAlign: 'right', paddingRight: '10px' }}>
     <Link to="/admin" // 🛑 CORRECTION CLÉ : Retourne au login admin
        style={{ 
            padding: '10px 18px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',  
                        color: 'white', 
                        textDecoration: 'none', 
                        border: '1px solid rgba(255, 255, 255, 0.3)', 
                        borderRadius: '8px', 
                        fontSize: '0.9em', 
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                 >
                    Se Connecter
                </Link>
            </div>
            
            {/* 2. CONTENU PRINCIPAL (Titre, Message, Boutons, QR Code) */}
            <div style={overlayStyle}> 
                <h1 style={{ color: 'white', fontSize: '2.5em' }}>{t('general.app_title')}</h1>
                <p style={{ fontSize: '1.4em', color: '#eee', marginBottom: '40px' }}>
                    {t('general.welcome_message')}
                </p>
                
                {/* Conteneur des boutons principaux */}
                <div style={{ 
                    marginTop: '20px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '25px', 
                    maxWidth: '350px', 
                    width: '100%',
                    margin: '0 auto',
                    marginBottom: '40px'
                }}>
                    
                    {/* Bouton SCANNER UN QR CODE */}
                    <Link 
                        to="/scan" 
                        style={{ 
                            display: 'block', 
                            padding: '18px 30px', 
                            backgroundColor: '#007bff', 
                            color: 'white', 
                            textDecoration: 'none', 
                            borderRadius: '10px', 
                            fontSize: '1.4em', 
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            transition: 'background-color 0.3s ease, transform 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#0056b3';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#007bff';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {t('general.scan_button')}
                    </Link>
                    
                    {/* Bouton PHOTOS OFFICIELLES */}
                    <Link 
                        to="/galerie" 
                        style={{ 
                            display: 'block', 
                            padding: '18px 30px', 
                            backgroundColor: '#00a000', 
                            color: 'white', 
                            textDecoration: 'none', 
                            borderRadius: '10px', 
                            fontSize: '1.4em', 
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            transition: 'background-color 0.3s ease, transform 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#007a00';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#00a000';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Photos Officielles
                    </Link>
                    
                </div>
                
                {/* 🛑 IMAGE DU QR CODE DE TEST */}
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', borderRadius: '8px', display: 'inline-block' }}>
                    <p style={{ color: '#333', fontSize: '1em', fontWeight: 'bold', margin: '5px 0' }}>
                        QR Code de Test (Scannez-moi !)
                    </p>
                    <img 
                        src="/qr-test.png" // Assurez-vous que ce fichier est dans frontend/public/
                        alt="QR Code de test pour l'œuvre Masque de Dakar" 
                        style={{ width: '150px', height: '150px', border: '1px solid #ccc' }} 
                    />
                </div>
                
            </div>
            
            {/* 3. FORMULAIRE DE CONTACT (en bas à droite, position fixe) */}
            <div style={formContainerStyle}>
                <ContactForm />
            </div>
            
        </div>
    );
};
export default HomePage;