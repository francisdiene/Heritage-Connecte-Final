// frontend/src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState('');
    
    // 🛑 VOTRE ENDPOINT FORMSPREE EST CORRECTEMENT INTÉGRÉ
    const FORM_ENDPOINT = "https://formspree.io/f/mnngbrop"; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const data = new FormData(form);
        
        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                setStatus('Merci pour votre message ! Nous vous recontacterons bientôt.');
                form.reset(); 
            } else {
                setStatus('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            setStatus('Erreur de connexion. Veuillez vérifier votre réseau.');
        }
    };

    if (status) {
        return <h3 style={{ color: '#007bff', textAlign: 'center', padding: '20px' }}>{status}</h3>;
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                maxWidth: '400px', 
                margin: '20px auto', 
                padding: '20px', 
                border: '1px solid #ddd', // Changé la couleur pour mieux voir sur le fond sombre
                borderRadius: '8px',
                backgroundColor: 'white', // Fond blanc pour le formulaire
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
        >
            <h2 style={{ textAlign: 'center', color: '#333' }}>Laissez-nous vos Coordonnées</h2>
            
            <input 
                type="text" 
                name="name" 
                placeholder="Votre Nom" 
                required 
                style={inputStyle}
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Votre E-mail" 
                required 
                style={inputStyle}
            />
            <textarea 
                name="message" 
                placeholder="Votre Message ou Feedback" 
                required 
                rows="4"
                style={{ ...inputStyle, resize: 'vertical' }}
            ></textarea>
            
            <button 
                type="submit" 
                style={{ 
                    padding: '10px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Envoyer
            </button>
        </form>
    );
};

const inputStyle = {
    padding: '12px', // Légèrement agrandi pour l'esthétique
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1em'
};

export default ContactForm;