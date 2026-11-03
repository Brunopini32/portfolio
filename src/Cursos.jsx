import React from 'react';
import './Cursos.css';
import { useLanguage } from './LanguageContext';

function Cursos() {
  const { t } = useLanguage();

  return (
    <section className="cursos-container" id="cursos">
      <h1 className="cursos-titulo">{t.cursos.titulo}</h1>

      <div className="cursos-grid">
        <div className="cursos-lista">
          <h3 className="secao-subtitulo">{t.cursos.emAndamento}</h3>
          <div className="curso-item">
            <span className="curso-nome">Fluência em Inteligência Artificial <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">Fundação Bradesco</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">Agentes Autônomos (Agentic AI) <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">FIAP</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">Big Data e Análise <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">FIAP</span>
          </div>

          <h3 className="secao-subtitulo" style={{ marginTop: '2.5rem' }}>{t.cursos.concluidos}</h3>
          <div className="curso-item">
            <span className="curso-nome">Nano Course Python <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">FIAP</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">Python Development <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">FIAP</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">Linux Completo + Servidores <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">Udemy</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">Redes de Computadores <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">Curso em Vídeo</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">MySQL <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">Curso em Vídeo</span>
          </div>
          <div className="curso-item">
            <span className="curso-nome">Curso Técnico em TI completo: manutenção, formatação <span className="ponto-azul">•</span></span>
            <span className="curso-instituicao">Udemy</span>
          </div>
        </div>

        <div className="card-formacao">
          <h2 className="card-titulo">Engenharia da Computação</h2>
          <div className="card-info">
            <div className="info-linha">
              <span className="info-label">{t.cursos.instituicao}</span>
              <span className="info-valor">Unisal Maria Auxiliadora</span>
            </div>
            <div className="info-linha">
              <span className="info-label">{t.cursos.tituloLabel}</span>
              <span className="info-valor">Bacharelado</span>
            </div>
            <div className="info-linha">
              <span className="info-label">{t.cursos.conclusao}</span>
              <span className="info-valor">Dezembro de 2026</span>
            </div>
          </div>
          <div className="semestres-container">
            <span className="semestre">S1</span>
            <span className="semestre">S2</span>
            <span className="semestre">S3</span>
            <span className="semestre ativo">S4</span>
            <span className="semestre inativo">S5</span>
          </div>
          <div className="idiomas-container">
            <span>Inglês intermediário</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cursos;