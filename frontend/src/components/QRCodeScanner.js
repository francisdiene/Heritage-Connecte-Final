// frontend/src/components/QRCodeScanner.js

import React from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const QRCodeScanner = () => {
    const navigate = useNavigate();

    const handleScan = async (result, error) => {
        if (result) {
            const id_qr = result.text; 

            try {
                // Appel API pour récupérer l'œuvre
                const response = await axios.get(`http://localhost:5000/api/oeuvres/${id_qr}`);
                
                if (response.data) {
                    // Redirection avec les données pour une expérience instantanée
                    navigate(`/oeuvre/${id_qr}`, { state: { oeuvreData: response.data } });
                } else {
                    alert("Œuvre non trouvée. Veuillez réessayer.");
                }
            } catch (apiError) {
                console.error("Erreur de récupération de l'œuvre:", apiError);
                alert("Erreur de connexion à l'API ou ID QR Invalide.");
            }
        }
    };

    return (
        <div className="scanner-container" style={{ width: '100%', maxWidth: '500px', margin: '20px auto' }}>
            <QrReader
                onResult={handleScan}
                constraints={{ facingMode: 'environment' }} 
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
};

export default QRCodeScanner;