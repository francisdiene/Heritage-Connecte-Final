// frontend/src/pages/ScanPage.js

import React from 'react';
import QRCodeScanner from '../components/QRCodeScanner';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const ScanPage = () => {
    const { t } = useLanguage();

    // ID de l'œuvre de démonstration : DOIT CORRESPONDRE À L'ID DE SECOURS dans OeuvrePage.js
    const DEMO_FIX_ID = 'masque-sagesse-fix'; 

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{t('general.scan_button')}</h2>
            <p>{t('oeuvre.scanner_instructions')}</p>
            
            <QRCodeScanner />
            
            {/* Lien de démonstration CRITIQUE pour le pitch */}
            <p style={{ marginTop: '20px' }}>
                <Link to={`/oeuvre/${DEMO_FIX_ID}`} style={{ color: '#007bff', fontWeight: 'bold' }}>
                    Tester l'Œuvre Masque de la Sagesse (Démo Garantie)
                </Link>
            </p>
        </div>
    );
};

export default ScanPage;