// frontend/src/pages/OeuvrePage.js

import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import axios from 'axios';
import Quiz from '../components/Quiz'; 

// ID de l'oeuvre de démonstration : Le lien soumis au jury
const DEMO_ID = 'masque-sagesse'; 

// Mock data pour le Quiz (temporaire)
const mockQuiz = {
    question_FR: "Selon le contexte historique, quelle était la fonction principale de ce masque ?",
    question_EN: "According to the historical context, what was the main function of this mask?",
    question_WO: "Ci xam-xamum taariix, lanmooy liggéeyu masku bii?",
    answers_FR: ["Un outil de chasse", "Un rituel de passage pour la connaissance", "Une décoration murale"],
    answers_EN: ["A hunting tool", "A ritual of passage for knowledge", "A wall decoration"],
    answers_WO: ["Jëfandikoo ci ndaw gi", "Ndamal xam-xam", "Mbaxana bu nécc"],
    correct_index: 1 
};

// --- FONCTION DE SECOURS CRITIQUE (GARANTIE VERCEL) ---
// Ces données s'affichent si l'ID est 'masque-sagesse', ignorant l'API.
const getMockData = () => ({
    titre: "Masque de la Sagesse - Démonstration MCN",
    historique: "Ce masque symbolise la transmission des savoirs et est utilisé lors de rites de passage importants, représentant l'un des trésors phares du Musée des Civilisations Noires.",
    description_FR: "Le Masque de la Sagesse incarne l'esprit des ancêtres et la continuité culturelle. (FR OK)",
    description_EN: "The Mask of Wisdom embodies the spirit of the ancestors and cultural continuity. (EN OK)",
    description_WO: "Mbasu xel-mi moo jëmmali xel ak coosanaam. (Wolof OK)",
    
    // Le lien sera l'ID de la vidéo (pour la correction de l'intégration)
    lien_video: 'AbFvuw3rnm8', 
    // Le lien est local pour garantir l'affichage sur mobile
    lien_audio: '/masque-audio.mp3',
});
// -----------------------------------------------------------------


const OeuvrePage = () => {
    const location = useLocation();
    const { id_qr } = useParams(); 
    const { t, currentLang } = useLanguage();

    const [oeuvreData, setOeuvreData] = useState(location.state?.oeuvreData || null);
    const [loading, setLoading] = useState(!oeuvreData);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!oeuvreData) {
            // 1. **CHECK CRITIQUE :** Si c'est l'ID de la démo, on ignore l'API et on charge les données statiques
            if (id_qr === DEMO_ID) {
                console.log("Chargement des données statiques garanties pour la démo.");
                setOeuvreData(getMockData()); 
                setLoading(false);
                return; 
            }

            // 2. TENTATIVE NORMALE DE CONNEXION AU BACKEND (pour les autres œuvres)
            const fetchOeuvre = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/oeuvres/${id_qr}`);
                    setOeuvreData(response.data);
                    setLoading(false);
                } catch (e) {
                    setError(true);
                    setLoading(false);
                }
            };
            fetchOeuvre();
        }
    }, [id_qr, oeuvreData]);

    if (loading) return <div style={{ padding: '20px' }}>Chargement de l'œuvre...</div>;
    if (error || !oeuvreData) return <Navigate to="/" replace />; 

    // Récupération des données (inchangée)
    const descriptionKey = `description_${currentLang.toUpperCase()}`;
    const description = oeuvreData[descriptionKey] || oeuvreData.description_FR; 
    const lienAudio = oeuvreData.lien_audio;
    const lienVideo = oeuvreData.lien_video; // Maintenant, contient uniquement l'ID (AbFvuw3rnm8)

    return (
        <div className="oeuvre-page" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}>{oeuvreData.titre}</h1>
            
            {/* SECTION 1: CONTEXTE HISTORIQUE */}
            <section style={{ marginTop: '20px' }}>
                <h2>{t('oeuvre.historical_context')}</h2>
                <p>{oeuvreData.historique}</p>
            </section>

            {/* SECTION 2: DESCRIPTION (Multilingue) et AUDIO */}
            <section style={{ marginTop: '20px' }}>
                <h3>{t('general.description_section')}</h3>
                <p>{description}</p>

                {lienAudio && (
                    <div style={{ marginTop: '15px' }}>
                        <h4>{t('general.audio_player_label')}</h4>
                        <audio controls src={lienAudio} style={{ width: '100%' }}>
                            Votre navigateur ne supporte pas l'élément audio.
                        </audio>
                    </div>
                )}
            </section>

            {/* SECTION 3: CONTENU MULTIMÉDIA (Vidéo) */}
            {lienVideo && (
                <section style={{ marginTop: '20px' }}>
                    <h2>{t('oeuvre.video_title')}</h2>
                    <iframe 
                        width="100%" 
                        height="315" 
                        // 👈 CORRECTION CRITIQUE : Utilise l'ID pour la source HTTPS la plus stable
                        src={`https://www.youtube.com/embed/${lienVideo}`}
                        title={oeuvreData.titre}
                        frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                </section>
            )}
            
            {/* SECTION 4: INNOVATION - LE COIN DE L'APPRENTI */}
            <section style={{ marginTop: '30px' }}>
                <Quiz quizData={mockQuiz} />
            </section>
        </div>
    );
};

export default OeuvrePage;