// frontend/src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector'; 
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
    const { t } = useLanguage(); 

    return (
        <header style={{ padding: '15px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <nav style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    <h1 style={{ fontSize: '1.5em', margin: 0 }}>{t('general.app_title')}</h1>
                </Link>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Link to="/scan" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', backgroundColor: '#5cb85c', borderRadius: '4px', marginRight: '15px' }}>
                        {t('general.scan_button')}
                    </Link>
                    <LanguageSelector />
                </div>
            </nav>
        </header>
    );
};

export default Navigation;