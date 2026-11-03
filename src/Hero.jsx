import React from 'react';
import './Hero.css';
import { useLanguage } from './LanguageContext'; // <-- Importe o hook

function Hero() {
  const { language, toggleLanguage, t } = useLanguage(); // <-- Use o contexto

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">bruno.dev</div>
        <div className="nav-links">
          <a href="#sobre">{t.nav.sobre}</a>
          <a href="#experiencia">{t.nav.experiencia}</a>
          <a href="#competencias">{t.nav.competencias}</a>
          <a href="#projetos">{t.nav.projetos}</a>
          <a href="#contato">{t.nav.contato}</a>
          
          <div className="language-switcher">
            <button 
              className={`lang-btn ${language === 'pt' ? 'active' : ''}`} 
              onClick={() => toggleLanguage('pt')}
            >
              PT
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
              onClick={() => toggleLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      <section className="hero-container" id="hero">
        <div className="hero-conteudo">
          
          <div className="hero-esquerda">
            <div className="badge-disponivel">
              <span className="dot-verde"></span>
              {t.hero.badge}
            </div>

            <h1 className="hero-titulo">
              Bruno<br />
              <span className="nome-destaque">Pini</span>
            </h1>

            <h2 className="hero-subtitulo">{t.hero.subtitulo}</h2>

            <p className="hero-descricao">{t.hero.descricao}</p>

            <div className="hero-info-grid">
              <div className="info-item">
                <span className="info-label">{t.hero.local}</span>
                <span className="info-valor">{t.hero.localValor}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t.hero.curso}</span>
                <span className="info-valor">{t.hero.cursoValor}</span>
              </div>
              <div className="info-item">
                <span className="info-label">{t.hero.area}</span>
                <span className="info-valor">{t.hero.areaValor}</span>
              </div>
            </div>

            <div className="hero-botoes">
              <a href="#projetos" className="btn-primario">{t.hero.btnProjetos}</a>
              <a href="#contato" className="btn-secundario">{t.hero.btnContato}</a>
            </div>
          </div>

          <div className="hero-direita">
            <div className="terminal-hero">
              <div className="terminal-hero-linha">
                <span className="terminal-prompt">&gt;</span> {t.hero.terminal.iniciado}
              </div>
              <div className="terminal-hero-linha">
                <span className="terminal-prompt">&gt;</span> {t.hero.terminal.redes}
              </div>
              <div className="terminal-hero-linha">
                <span className="terminal-prompt">&gt;</span> {t.hero.terminal.infra}
              </div>
              <div className="terminal-hero-linha">
                <span className="terminal-prompt">&gt;</span> {t.hero.terminal.linux}
              </div>
              <div className="terminal-hero-linha">
                <span className="terminal-prompt">&gt;</span> {t.hero.terminal.aguardando}<span className="terminal-cursor">_</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;