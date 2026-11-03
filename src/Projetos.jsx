import React from 'react';
import './Projetos.css';
import { useLanguage } from './LanguageContext';

function Projetos() {
  const { t } = useLanguage();

  return (
    <section className="projetos-container" id="projetos">
      <div className="projetos-header">
        <h1>{t.projetos.titulo}</h1>
        <p>{t.projetos.subtitulo}</p>
      </div>

      <div className="projetos-lista">
        {/* Projeto 01 - Sistema de Gestão para Oficina */}
        <article className="projeto-item">
          <div className="projeto-info">
            <span className="status-badge">{t.projetos.emProducao}</span>
            <h2 className="projeto-titulo">{t.projetos.p1Titulo}</h2>
            <p className="projeto-descricao">{t.projetos.p1Desc}</p>
            <a 
              href="https://github.com/Brunopini32/Projeto-AcVans" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              {t.projetos.verGithub} ↗
            </a>
          </div>

          <div className="projeto-detalhes">
            <span className="detalhes-titulo">{t.projetos.tecnologias}</span>
            <div className="tech-tags">
              <span>Python</span>
              <span>Flask</span>
              <span>Java</span>
              <span>SQL</span>
              <span>QR Code</span>
            </div>
          </div>

          <div className="projeto-detalhes">
            <span className="detalhes-titulo">{t.projetos.funcionalidades}</span>
            <ul className="features-list">
              <li>{t.projetos.p1F1}</li>
              <li>{t.projetos.p1F2}</li>
              <li>{t.projetos.p1F3}</li>
            </ul>
          </div>
        </article>

        {/* Projeto 02 - Sistema de Controle de Notas Fiscais */}
        <article className="projeto-item">
          <div className="projeto-info">
            <span className="status-badge dev">{t.projetos.emDesenvolvimento}</span>
            <h2 className="projeto-titulo">{t.projetos.p2Titulo}</h2>
            <p className="projeto-descricao">{t.projetos.p2Desc}</p>
            <a 
              href="https://github.com/Brunopini32/estagio-" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
            >
              {t.projetos.verGithub} ↗
            </a>
          </div>

          <div className="projeto-detalhes">
            <span className="detalhes-titulo">{t.projetos.tecnologias}</span>
            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>SQLite</span>
            </div>
          </div>

          <div className="projeto-detalhes">
            <span className="detalhes-titulo">{t.projetos.funcionalidades}</span>
            <ul className="features-list">
              <li>{t.projetos.p2F1}</li>
              <li>{t.projetos.p2F2}</li>
              <li>{t.projetos.p2F3}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projetos;