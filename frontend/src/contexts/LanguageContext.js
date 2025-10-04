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

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};