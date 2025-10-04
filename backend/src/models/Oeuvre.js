// backend/src/models/Oeuvre.js

const mongoose = require('mongoose');

// Le Schéma de l'Œuvre : modélise les exigences du Cahier des Charges
const OeuvreSchema = new mongoose.Schema({
    // ID UNIQUE DE RÉFÉRENCE (Clé pour le scan du QR Code)
    id_qr: {
        type: String,
        required: true,
        unique: true 
    },
    // Contenu : Titre et Historique
    titre: {
        type: String,
        required: true
    },
    historique: {
        type: String, // Informations culturelles liées à l'œuvre
        required: true
    },
    
    // EXIGENCE MULTILINGUE du CdC
    description_FR: { type: String, required: true },
    description_EN: { type: String, required: true },
    description_WO: { type: String, required: true },

    // EXIGENCE MULTIMÉDIA du CdC
    lien_audio: { type: String, required: true }, // URL du fichier audio (option d'écoute)
    lien_video: { type: String, default: null }  // URL d'une vidéo descriptive
});

const Oeuvre = mongoose.model('Oeuvre', OeuvreSchema);
module.exports = Oeuvre;