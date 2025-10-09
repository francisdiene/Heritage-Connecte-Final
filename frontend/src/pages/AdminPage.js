// frontend/src/pages/AdminPage.js - VERSION AVEC LOGIN ET REDIRECTION

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 🛑 Link est ajouté ici

const AdminPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError(''); 

        // 🛑 Identifiants de démonstration (admin / admin123)
        if (username === 'admin' && password === 'admin123') {
            
            // 🛑 LIGNE CLÉ : Redirige vers la page de vérification de l'œuvre après la connexion
            navigate('/oeuvre/masque-sagesse-fix'); 
        } else {
            setError('Nom d\'utilisateur ou mot de passe incorrect (Démo : admin / admin123).');
        }
    };

    return (
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <h1 style={{ color: '#007bff' }}>Accès Administrateur</h1>
            <p style={{ marginBottom: '30px' }}>
                Entrez vos identifiants pour vérifier le contenu :
            </p>
            
            <form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                {error && <p style={{ color: '#dc3545', marginBottom: '15px' }}>{error}</p>}
                
                <input 
                    type="text" 
                    placeholder="Nom d'utilisateur" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={inputStyle}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Mot de passe" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={inputStyle}
                    required
                />
                
                <button type="submit" style={buttonStyle}>
                    Se Connecter
                </button>
            </form>

            <Link to="/" style={{ marginTop: '20px', display: 'inline-block', color: '#007bff' }}>
                Retour à l'Accueil
            </Link>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '10px', margin: '10px 0', 
    border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box'
};

const buttonStyle = {
    width: '100%', padding: '12px', backgroundColor: '#007bff', 
    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer',
    fontSize: '1.1em', marginTop: '10px'
};

export default AdminPage;