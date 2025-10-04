// frontend/src/pages/HomePage.js

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useLanguage();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{t('general.app_title')}</h1>
      <p style={{ fontSize: '1.2em' }}>{t('general.welcome_message')}</p>
      <Link to="/scan" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1em' }}>
        {t('general.scan_button')}
      </Link>
    </div>
  );
};
export default HomePage;