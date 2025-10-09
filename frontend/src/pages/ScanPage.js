// frontend/src/pages/ScanPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';

const ScanPage = () => {
    const navigate = useNavigate();
    const [scanResult, setScanResult] = useState('');
    const [error, setError] = useState(null);

    const handleScan = (data) => {
        // data est le résultat du scan (l'ID du QR code)
        if (data) {
            setScanResult(data);
            console.log('QR Code détecté:', data);

            // 🛑 Logique de Redirection : 
            // Nous supposons que le QR code contient directement l'ID de l'oeuvre (ex: "image-01")
            navigate(`/oeuvre/${data}`);
        }
    };

    const handleError = (err) => {
        // En cas d'erreur (ex: caméra non trouvée ou permission refusée)
        console.error(err);
        setError("Erreur d'accès à la caméra. Vérifiez les permissions.");
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <h1 style={{ color: '#333', marginBottom: '30px' }}>Scanner un QR Code</h1>
            
            <div style={{ 
                maxWidth: '400px', 
                margin: '0 auto', 
                padding: '20px', 
                border: '1px solid #ccc', 
                borderRadius: '10px',
                backgroundColor: 'white'
            }}>
                {/* 🛑 COMPOSANT DU LECTEUR QR CODE */}
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            handleScan(result?.text);
                        }
                        if (!!error) {
                            // On peut choisir d'afficher l'erreur ici ou la gérer silencieusement
                            // console.info(error); 
                        }
                    }}
                    constraints={{ facingMode: 'environment' }} // Utilise la caméra arrière du téléphone
                    containerStyle={{ width: '100%', height: 'auto' }}
                    videoStyle={{ borderRadius: '8px' }}
                />
                
                {/* Message d'état pour le visiteur */}
                {scanResult && (
                    <p style={{ marginTop: '20px', color: '#00a000', fontWeight: 'bold' }}>
                        QR Code scanné ! Redirection...
                    </p>
                )}

                {error && (
                    <p style={{ marginTop: '20px', color: '#dc3545', fontWeight: 'bold' }}>{error}</p>
                )}
            </div>
            
            {/* Bouton de secours ou pour revenir en arrière */}
            <button
                onClick={() => navigate('/')}
                style={{ 
                    marginTop: '40px', 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer' 
                }}
            >
                Annuler
            </button>
        </div>
    );
};

export default ScanPage;