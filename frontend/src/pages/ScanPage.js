// frontend/src/pages/ScanPage.js - CODE SÉCURISÉ FINAL

import React, { useState } from 'react';
// L'IMPORTATION DE USELANGUAGE EST COMMENTÉE POUR ÉVITER LE CRASH DE CONTEXTE
// import { useLanguage } from '../contexts/LanguageContext'; 
import { useNavigate } from 'react-router-dom';

const ScanPage = () => {
    
    // Logique de secours pour le texte (FR fixe)
    const t = (key) => {
        if (key === 'scan.title') return "Scanner un QR Code";
        if (key === 'scan.placeholder') return "Entrez l'ID QR manuellement (Ex: masque-sagesse-fix)";
        if (key === 'scan.button') return "Charger l'Œuvre";
        return key; 
    };
    
    // Logique de navigation/scan
    const [qrCode, setQrCode] = useState('');
    const navigate = useNavigate();

    const handleScan = () => {
        // Redirige vers la page de l'œuvre avec l'ID entré
        if (qrCode) {
            navigate(`/oeuvre/${qrCode}`);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <h1>{t('scan.title')}</h1>
            <p style={{ margin: '20px 0' }}>{t('scan.placeholder')}</p>

            {/* Champ de saisie pour l'ID manuel */}
            <input 
                type="text"
                placeholder={t('scan.placeholder')}
                value={qrCode}
                onChange={(e) => setQrCode(e.target.value)}
                style={{ width: '100%', padding: '12px', margin: '15px 0', border: '2px solid #007bff', borderRadius: '5px' }}
            />
            
            <button 
                onClick={handleScan}
                style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    fontSize: '1.1em'
                }}
            >
                {t('scan.button')}
            </button>
            
            <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
                *Le composant de scan par caméra est désactivé pour la stabilité de la démo.
            </p>
        </div>
    );
};

export default ScanPage;