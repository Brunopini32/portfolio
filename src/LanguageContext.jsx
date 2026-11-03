// src/LanguageContext.jsx

import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt'); // Idioma padrão: PT

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language]; // Atalho para as traduções do idioma atual

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}