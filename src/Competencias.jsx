import React from 'react';
import './Competencias.css';
import { useLanguage } from './LanguageContext';

function Competencias() {
  const { t } = useLanguage();

  return (
    <section className="competencias-container" id="competencias">
      <h1 className="competencias-titulo">{t.competencias.titulo}</h1>

      <div className="competencias-grid">
        <div className="competencias-coluna">
          <h3 className="coluna-titulo">{t.competencias.linguagens}</h3>
          <div className="tags-container">
            <span className="tag">Python</span>
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">SQL</span>
          </div>
        </div>

        <div className="competencias-coluna">
          <h3 className="coluna-titulo">{t.competencias.backend}</h3>
          <div className="tags-container">
            <span className="tag">Flask</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express</span>
          </div>
        </div>

        <div className="competencias-coluna">
          <h3 className="coluna-titulo">{t.competencias.dados}</h3>
          <div className="tags-container">
            <span className="tag">Machine Learning</span>
            <span className="tag">Power BI</span>
          </div>
        </div>

        <div className="competencias-coluna">
          <h3 className="coluna-titulo">{t.competencias.banco}</h3>
          <div className="tags-container">
            <span className="tag">MySQL</span>
            <span className="tag">SQLite</span>
          </div>
        </div>
      </div>

      <div className="competencias-linha-inferior">
        <h3 className="coluna-titulo">{t.competencias.suporte}</h3>
        <div className="tags-container">
          <span className="tag">GLPI</span>
          <span className="tag">Ubuntu</span>
          <span className="tag">Windows</span>
          <span className="tag">Git</span>
          <span className="tag">GitHub</span>
          <span className="tag">Railway</span>
        </div>
      </div>
    </section>
  );
}

export default Competencias;