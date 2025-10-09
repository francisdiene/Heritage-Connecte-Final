// frontend/src/pages/GaleriePage.js - CODE FINAL STABLE

import React from 'react';
import { Link } from 'react-router-dom';
// Importez les données de votre galerie
import galleryData from '../data/galleryData'; 

const GaleriePage = () => {
    
    // Si vos données sont vides, affichez un message clair
    if (!galleryData || galleryData.length === 0) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h1 style={{ color: '#dc3545' }}>Aucune Œuvre Trouvée</h1>
                <p style={{ fontSize: '1.1em' }}>Veuillez remplir le fichier 'galleryData.js' avec des données.</p>
                <Link to="/" style={{ marginTop: '20px', display: 'inline-block' }}>Retour à l'Accueil</Link>
            </div>
        );
    }
    
    return (
        <div style={{ padding: '30px', textAlign: 'center', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <h1 style={{ color: '#00a000', marginBottom: '40px', fontSize: '2.5em' }}>
                Photos Officielles du Musée
            </h1>
            
            {/* Conteneur de la grille (Responsive) */}
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '25px', // Espace entre les cartes
                maxWidth: '1200px', // Limite la largeur du contenu
                margin: '0 auto'
            }}>
                {/* Boucle sur toutes les données pour afficher les cartes */}
                {galleryData.map((oeuvre) => (
                    <Link 
                        to={`/oeuvre/${oeuvre.id}`} // 🛑 Correction : Utilise oeuvre.id pour le lien
                        key={oeuvre.id} 
                        style={{ 
                            textDecoration: 'none', 
                            color: 'inherit', 
                            width: 'calc(33.33% - 20px)', // 3 cartes par ligne sur desktop (environ)
                            minWidth: '250px', // Assure qu'il y a assez de place pour le contenu
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {/* Image */}
                        <img 
                            src={oeuvre.imagePath} // 🛑 Correction : Utilise oeuvre.imagePath pour la source
                            alt={oeuvre.title} 
                            style={{ 
                                width: '100%', 
                                height: '200px', 
                                objectFit: 'cover', 
                                borderBottom: '1px solid #eee', 
                            }} 
                        />
                        
                        {/* Contenu du texte */}
                        <div style={{ padding: '15px' }}>
                            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2em', color: '#00a000' }}>
                                {oeuvre.title}
                            </h3>
                            <p style={{ margin: 0, fontSize: '0.9em', color: '#666', 
                                        maxHeight: '40px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {oeuvre.description.substring(0, 70)}...
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            
            <Link to="/" style={{ 
                marginTop: '50px', 
                display: 'block', 
                fontSize: '1.1em', 
                color: '#007bff', 
                textDecoration: 'underline'
            }}>
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default GaleriePage;