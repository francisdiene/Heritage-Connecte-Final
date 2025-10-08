// frontend/src/data/galleryData.js - VERSION FINALE SANS RÉFÉRENCE 01

const galleryData = [];

// 1. Ajout de l'œuvre de démo principale
const demoItem = {
    id: 'masque-sagesse-fix',
    title: 'Masque de la Sagesse (Démo)',
    description: 'Œuvre principale de la démo, pour tester la fonctionnalité de scan.',
    imagePath: '/masque-oeuvre.jpg', 
};
galleryData.push(demoItem);

// 2. Génération des 12 photos restantes (image-02.jpg à image-13.jpg)
// La boucle commence à 2 pour ignorer l'entrée 01
for (let i = 2; i <= 13; i++) { 
    
    // Crée une chaîne de caractères à deux chiffres (ex: 02, 10, 13)
    const idNumber = i.toString().padStart(2, '0'); 
    
    const title = `Œuvre du Musée - Réf. ${idNumber}`;
    const imagePath = `/image-${idNumber}.jpg`; 
    
    galleryData.push({
        id: `oeuvre-id-${idNumber}`,
        title: title,
        description: `Pièce de la collection officielle du musée.`,
        imagePath: imagePath,
    });
}

export default galleryData;