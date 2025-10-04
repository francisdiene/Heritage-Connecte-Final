// frontend/src/pages/ScanPage.js

import React from 'react';
import QRCodeScanner from '../components/QRCodeScanner';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const ScanPage = () => {
    const { t } = useLanguage();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{t('general.scan_button')}</h2>
            <p>{t('oeuvre.scanner_instructions')}</p>
            
            <QRCodeScanner />
            
            {/* Lien de débogage pour MCN-001-SGS (l'œuvre insérée) */}
            <p style={{ marginTop: '20px' }}>
                <Link to="/oeuvre/MCN-001-SGS" style={{ color: '#007bff' }}>
                    Tester l'Œuvre Masque de la Sagesse (Débogage)
                </Link>
            </p>
        </div>
    );
};

export default ScanPage;