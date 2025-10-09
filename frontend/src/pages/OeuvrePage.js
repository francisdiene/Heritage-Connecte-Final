// frontend/src/pages/OeuvrePage.js - CODE FINAL STABLE ET COMPLET

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import galleryData from '../data/galleryData'; // Importation des données

const OeuvrePage = () => {
    
    // Fonction de secours pour le texte (FR fixe)
    const t = (key) => {
        if (key === 'oeuvre.audio_label') return "Audio Guide";
        return key; 
    };
    
    const { id_qr } = useParams();
    const [oeuvre, setOeuvre] = useState(null);
    
    // 🛑 AJOUT 1 : État pour le bouton favori
    const [isFavorite, setIsFavorite] = useState(false); 

    useEffect(() => {
        // 1. Cherche l'objet correspondant à l'ID dans le tableau de données
        const foundItem = galleryData.find(item => item.id === id_qr);

        if (foundItem) {
            // 2. Si l'ID est trouvé, affiche ses données
            const data = {
                titre: foundItem.title,
                description: foundItem.description + " Cette page valide la fonctionnalité de lien. Le contenu détaillé (quiz, vidéo) serait chargé ici.",
                lien_image: foundItem.imagePath, 
                lien_audio: '/masque-audio.mp3' // Réutilisation du même audio pour la démo
            };
            setOeuvre(data);

            // 🛑 AJOUT 2 : Vérifie l'état initial des favoris au chargement de la page
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            setIsFavorite(favorites.includes(id_qr));
        } else {
            // 3. L'ID n'est pas reconnu
            setOeuvre(null);
        }
        
    // L'effet s'exécute à chaque changement d'ID dans l'URL
    }, [id_qr]); 

    // 🛑 AJOUT 3 : Fonction pour basculer les favoris
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        let newFavorites;

        if (isFavorite) {
            // Retirer l'œuvre des favoris
            newFavorites = favorites.filter(id => id !== id_qr);
        } else {
            // Ajouter l'œuvre aux favoris
            newFavorites = [...favorites, id_qr];
        }

        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite); // Inverse l'état local
    };
    
    if (!oeuvre) {
        return <div style={{padding: '50px', textAlign: 'center'}}>Chargement ou Œuvre non trouvée. ID non valide : {id_qr}</div>;
    }

    const { titre, description, lien_image, lien_audio } = oeuvre;
    
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <h1 style={{ margin: 0, paddingRight: '20px' }}>{titre}</h1>
                
                {/* 🛑 BOUTON FAVORIS INTÉGRÉ */}
                <button
                    onClick={toggleFavorite}
                    style={{ 
                        padding: '10px 18px', 
                        backgroundColor: isFavorite ? '#dc3545' : '#ffc107', // Rouge si favori, Jaune sinon
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1em',
                        marginTop: '10px', 
                    }}
                >
                    {isFavorite ? '⭐️ Retirer des Favoris' : '☆ Ajouter aux Favoris'}
                </button>
            </div>
            
            <p style={{fontStyle: 'italic', color: '#888', borderBottom: '1px solid #ddd', paddingBottom: '10px'}}>
                ID de référence : {id_qr}
            </p>
            
            <img 
                src={lien_image} 
                alt={titre} 
                style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', margin: '20px 0' }} 
            />

            <h2>Description</h2>
            <p>{description}</p>

            <h2>{t('oeuvre.audio_label')}</h2>
            <audio controls src={lien_audio} style={{ width: '100%', margin: '10px 0' }}>
                Votre navigateur ne supporte pas l'élément audio.
            </audio>

        </div>
    );
};
export default OeuvrePage;