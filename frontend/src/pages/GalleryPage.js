// frontend/src/pages/GalleryPage.js

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Liste des chemins d'accès aux images dans le dossier public/musee-images
// MODIFIEZ CETTE LISTE AVEC LES NOMS EXACTS DE VOS FICHIERS
const MUSEUM_IMAGE_PATHS = [
    '/musee-images/image-01.jpg', 
    '/musee-images/image-02.jpg', 
    '/musee-images/image-03.jpg', 
    // Ajoutez ici TOUS les autres chemins /musee-images/image-XX.jpg
];

const GalleryPage = () => {
    const { t } = useLanguage();
    
    // Style simple pour l'affichage en grille
    const galleryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    };
    
    const imageContainerStyle = {
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };
    
    const imageStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'cover', // Assure que l'image couvre l'espace sans être déformée
        transition: 'transform 0.3s ease-in-out',
    };

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
                <Link to="/" style={{ float: 'left', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
                    &larr; {t('general.back_home')}
                </Link>
                <h1 style={{ margin: 0 }}>{t('general.gallery_title')}</h1>
                <p>{t('gallery.official_photos')}</p>
            </div>

            <div style={galleryStyle}>
                {MUSEUM_IMAGE_PATHS.map((path, index) => (
                    <div key={index} style={imageContainerStyle}>
                        <img 
                            src={path} 
                            alt={`Photo officielle du musée ${index + 1}`} 
                            style={imageStyle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage; 