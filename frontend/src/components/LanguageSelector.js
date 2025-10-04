// frontend/src/components/LanguageSelector.js

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { setLanguage, currentLang } = useLanguage();

    const languages = [
        { code: 'fr', label: 'Français' },
        { code: 'en', label: 'English' },
        { code: 'wo', label: 'Wolof' }
    ];

    return (
        <div className="language-selector">
            {languages.map((lang) => (
                <button 
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    // Style pour montrer la langue active
                    style={{ fontWeight: currentLang === lang.code ? 'bold' : 'normal', margin: '0 5px', padding: '5px', cursor: 'pointer' }}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;