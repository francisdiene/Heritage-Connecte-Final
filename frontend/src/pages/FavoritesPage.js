// frontend/src/pages/FavoritesPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assurez-vous d'avoir ce fichier de données pour afficher les favoris
import galleryData from '../data/galleryData'; 

const FavoritesPage = () => {
    const [favoriteWorks, setFavoriteWorks] = useState([]);

    useEffect(() => {
        // Récupérer les IDs des favoris depuis le stockage local
        const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // Filtrer les données de la galerie
        const filteredWorks = galleryData.filter(work => favoriteIds.includes(work.id));
        
        setFavoriteWorks(filteredWorks);
    }, []);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: '#007bff', marginBottom: '30px' }}>Ma Collection (Favoris)</h1>

            {favoriteWorks.length === 0 ? (
                <p style={{ fontSize: '1.2em' }}>
                    Vous n'avez pas encore d'œuvres favorites. Visitez la <Link to="/galerie">Galerie</Link> pour en ajouter !
                </p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {favoriteWorks.map(oeuvre => (
                        <Link 
                            to={`/oeuvre/${oeuvre.id_qr}`} 
                            key={oeuvre.id} 
                            style={{ 
                                textDecoration: 'none', 
                                color: 'inherit', 
                                border: '1px solid #ccc', 
                                borderRadius: '8px', 
                                padding: '15px', 
                                width: '250px', 
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img 
                                src={oeuvre.img_url} 
                                alt={oeuvre.title} 
                                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }} 
                            />
                            <h3 style={{ margin: '0', fontSize: '1.1em' }}>{oeuvre.title}</h3>
                        </Link>
                    ))}
                </div>
            )}
            <Link to="/" style={{ marginTop: '30px', display: 'block' }}>Retour à l'Accueil</Link>
        </div>
    );
};
export default FavoritesPage;