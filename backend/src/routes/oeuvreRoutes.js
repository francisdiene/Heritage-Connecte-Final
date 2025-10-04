// backend/src/routes/oeuvreRoutes.js

const express = require('express');
const router = express.Router();
const Oeuvre = require('../models/Oeuvre');

// ROUTE 1 : GET /api/oeuvres/:id_qr
// Objectif : Récupérer la fiche complète d'une œuvre par son ID scanné
router.get('/:id_qr', async (req, res) => {
    try {
        const { id_qr } = req.params;
        
        // Recherche l'œuvre par son ID unique de QR Code
        const oeuvre = await Oeuvre.findOne({ id_qr: id_qr });

        if (!oeuvre) {
            return res.status(404).json({ message: 'Œuvre non trouvée. ID de QR Code invalide.' });
        }

        // Succès : Renvoie toutes les données multilingues et multimédia au Frontend
        res.json(oeuvre); 

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur Serveur Interne' });
    }
});

// ROUTE 2 : POST /api/oeuvres (Route temporaire pour insérer des données de test)
router.post('/', async (req, res) => {
    try {
        const nouvelleOeuvre = new Oeuvre(req.body);
        await nouvelleOeuvre.save();
        res.status(201).json(nouvelleOeuvre);
    } catch (error) {
        // Renvoie une erreur si l'id_qr est déjà utilisé (unique: true)
        res.status(400).json({ message: 'Erreur lors de l\'ajout de l\'œuvre', error: error.message });
    }
});

module.exports = router;