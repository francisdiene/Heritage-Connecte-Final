// frontend/src/pages/OeuvrePage.js - CODE FINAL LIÉ AUX DONNÉES

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import galleryData from '../data/galleryData'; // <--- IMPORTATION DES DONNÉES

const OeuvrePage = () => {
    
    // Fonction de secours pour le texte (FR fixe)
    const t = (key) => {
        if (key === 'oeuvre.audio_label') return "Audio Guide";
        // Ajoutez les autres clés utilisées sur cette page
        return key; 
    };
    
    const { id_qr } = useParams();
    const [oeuvre, setOeuvre] = useState(null);

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
        } else {
            // 3. L'ID n'est pas reconnu
            setOeuvre(null);
        }
    }, [id_qr]);
    
    if (!oeuvre) {
        return <div style={{padding: '50px', textAlign: 'center'}}>Chargement ou Œuvre non trouvée. ID non valide : {id_qr}</div>;
    }

    const { titre, description, lien_image, lien_audio } = oeuvre;
    
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>{titre}</h1>
            <p style={{fontStyle: 'italic', color: '#888'}}>ID de référence : {id_qr}</p>
            
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