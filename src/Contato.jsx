import React, { useState } from 'react'; // 1. Importe o useState
import './Contato.css';
import { useLanguage } from './LanguageContext';

function Contato() {
  const { t } = useLanguage();
  
  // 2. Crie um estado para saber se o e-mail foi copiado
  const [copiado, setCopiado] = useState(false);

  // 3. Crie a função que faz a cópia
  const handleCopiarEmail = () => {
    const email = "brunopini491@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
      setCopiado(true); // Muda o estado para true
      
      // Volta ao normal após 2 segundos
      setTimeout(() => {
        setCopiado(false);
      }, 2000);
    }).catch((err) => {
      console.error("Falha ao copiar o e-mail: ", err);
    });
  };

  return (
    <section className="contato-container" id="contato">
      <div className="contato-conteudo">
        <div className="contato-texto">
          <h1 className="contato-titulo">
            {t.contato.titulo1} <br />
            <span className="destaque-azul">{t.contato.titulo2}</span>
          </h1>
          <p className="contato-descricao">{t.contato.descricao}</p>
        </div>

        <div className="terminal-card">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">&gt;</span> {t.contato.terminal.abrindo} <span className="status-ok">ok</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">&gt;</span> {t.contato.terminal.tecnica} <span className="status-ok">ok</span>
            </div>
            <div className="terminal-line">
              <span className="prompt">&gt;</span> {t.contato.terminal.aguardando} <span className="cursor-blink">|</span>
            </div>

            <div className="email-box">
              <span className="email-texto">brunopini491@gmail.com</span>
              
              {/* 4. Adicione o onClick e mude o texto do botão dinamicamente */}
              <button className="btn-copiar" onClick={handleCopiarEmail}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                {/* Se copiado for true, mostra "Copiado!", senão mostra a tradução padrão */}
                {copiado ? "Copiado!" : t.contato.copiar}
              </button>

            </div>

            <div className="terminal-links">
              <a 
                href="https://linkedin.com/in/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-social"
              >
                LinkedIn ↗
              </a>
              <span className="separador">/</span>
              <a 
                href="https://github.com/Brunopini32" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-social"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;