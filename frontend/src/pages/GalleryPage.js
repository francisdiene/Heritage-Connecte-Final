// frontend/src/pages/GalleryPage.js - CODE FINAL AVEC BOUCLE

import React from 'react';
import { Link } from 'react-router-dom';
import galleryData from '../data/galleryData'; // <--- ASSUREZ-VOUS QUE LE CHEMIN EST CORRECT

const GalleryPage = () => {
    
    // Fonction de secours pour le texte (FR fixe)
    const t = (key) => {
        if (key === 'gallery.title') return "Galerie Photos Officielles";
        if (key === 'gallery.description') return "Explorez les collections d'images du Musée des Civilisations Noires.";
        return key; 
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>{t('gallery.title')}</h1>
            <p style={{ marginBottom: '40px' }}>{t('gallery.description')}</p>
            
            {/* GRILLE D'AFFICHAGE DES PHOTOS */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '30px' 
            }}>
                {/* BOUCLE SUR LES 14 ÉLÉMENTS */}
                {galleryData.map((item) => (
                    <Link 
                        key={item.id} 
                        to={`/oeuvre/${item.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div style={{ 
                            border: '1px solid #ddd', 
                            borderRadius: '8px', 
                            overflow: 'hidden', 
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s'
                        }}>
                            {/* Image */}
                            <img 
                                src={item.imagePath} 
                                alt={item.title} 
                                style={{ 
                                    width: '100%', 
                                    height: '250px', 
                                    objectFit: 'cover' 
                                }} 
                            />
                            {/* Texte */}
                            <div style={{ padding: '15px' }}>
                                <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{item.title}</h3>
                                <p style={{ margin: 0, fontSize: '0.9em', color: '#555' }}>{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;