// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// 1. Configuration des variables d'environnement
dotenv.config();

const app = express();

// Middleware : Permet au Frontend d'envoyer des requêtes JSON et gère le CORS
app.use(express.json());
app.use(cors()); // Configurez ceci plus tard pour n'accepter que votre frontend

// 2. Connexion à la Base de Données (MongoDB)
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mcn_hackathon';

mongoose.connect(DB_URI)
    .then(() => console.log('MongoDB connecté avec succès.'))
    .catch(err => console.error('Erreur de connexion MongoDB :', err));

// 3. Importation et utilisation des Routes API (à créer à l'étape 4)
const oeuvreRoutes = require('./src/routes/oeuvreRoutes');
app.use('/api/oeuvres', oeuvreRoutes);

// 4. Lancement du Serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur Node.js démarré sur le port ${PORT}`);
    // backend/server.js

// ... (vers la ligne 30)

// Route de test simple
app.get('/', (req, res) => {
    res.send('API MCN est en ligne !');
});

// 3. Importation et utilisation des Routes API
const oeuvreRoutes = require('./src/routes/oeuvreRoutes');
app.use('/api/oeuvres', oeuvreRoutes);

// ...
});