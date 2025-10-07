// frontend/src/contexts/LanguageContext.js

import React, { createContext, useState, useContext } from 'react';

// Importation des traductions
// Assurez-vous que les fichiers sont créés dans src/locales !
const translations = {
    fr: require('../locales/fr.json'),
    en: require('../locales/en.json'),
    wo: require('../locales/wo.json'),
};

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('fr');
    
    const setLanguage = (lang) => {
        if (translations[lang]) {
            setCurrentLang(lang);
        }
    };
    
    // Fonction de traduction : t('section.key')
    const t = (key) => {
        const [section, subkey] = key.split('.');
        return translations[currentLang][section][subkey] || key;
    };

    const value = { 
        currentLang, 
        setLanguage, 
        t
    };
    // frontend/src/contexts/LanguageContext.js (Ajoutez ceci dans l'objet 'translations')

const translations = {
    fr: {
        // ... vos clés existantes
        'general.back_home': 'Retour à l\'accueil',
        'general.gallery_title': 'Galerie Officielle du Musée',
        'gallery.official_photos': 'Découvrez les clichés exclusifs envoyés directement par les organisateurs du musée.',
    },
    en: {
        // ... vos clés existantes
        'general.back_home': 'Back to Home',
        'general.gallery_title': 'Official Museum Gallery',
        'gallery.official_photos': 'Discover exclusive shots sent directly by the museum organizers.',
    },
    wo: {
        // ... vos clés existantes
        'general.back_home': 'Dëkki-ji',
        'general.gallery_title': 'Nataal yi Sopu (Galerie)',
        'gallery.official_photos': 'Jàppal nataal yu sóopu yii ñu génne ànd ak jàmm.',
    },
    // ...
};

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};