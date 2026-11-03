import React from 'react';
import './Sobre.css';
import { useLanguage } from './LanguageContext';

function Sobre() {
  const { t } = useLanguage();

  return (
    <section className="sobre-container" id="sobre">
      <div className="sobre-topo">
        <div className="sobre-esquerda">
          <h1 className="sobre-titulo">
            {t.sobre.titulo1} <span className="destaque-azul">{t.sobre.titulo2}</span>
            <div className="linha-azul"></div>
          </h1>
        </div>

        <div className="sobre-direita">
          <p>{t.sobre.p1}</p>
          <p>{t.sobre.p2}</p>
          <p>{t.sobre.p3}</p>
        </div>
      </div>

      <div className="sobre-info-grid">
        <div className="info-item">
          <div className="info-icone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f6feb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div className="info-texto">
            <span className="info-label">{t.sobre.formacao}</span>
            <span className="info-valor">{t.sobre.formacaoValor}</span>
            <span className="info-sub">{t.sobre.formacaoSub}</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f6feb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div className="info-texto">
            <span className="info-label">{t.sobre.previsao}</span>
            <span className="info-valor">{t.sobre.previsaoValor}</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f6feb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <div className="info-texto">
            <span className="info-label">{t.sobre.interesses}</span>
            <span className="info-valor">{t.sobre.interessesValor}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;