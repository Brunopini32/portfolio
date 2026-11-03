import React from 'react';
import './Experiencia.css';
import { useLanguage } from './LanguageContext';

function Experiencia() {
  const { t } = useLanguage();

  return (
    <section className="experiencia-container" id="experiencia">
      <h1 className="experiencia-titulo">{t.experiencia.titulo}</h1>

      <div className="experiencia-lista">
        
        {/* Experiência 2 */}
        <div className="experiencia-item">
          <div className="experiencia-data">
            <span>12/2023 - <span className="data-destaque">{t.experiencia.atual}</span></span>
          </div>
          <div className="experiencia-conteudo">
            <h2 className="cargo">{t.experiencia.exp2Cargo}</h2>
            <span className="empresa">{t.experiencia.exp2Empresa}</span>
            <p className="descricao">{t.experiencia.exp2Desc}</p>
          </div>
        </div>

        {/* Experiência 3 */}
        <div className="experiencia-item">
          <div className="experiencia-data">
            <span>11/11/2021 - 13/02/2023</span>
          </div>
          <div className="experiencia-conteudo">
            <h2 className="cargo">{t.experiencia.exp3Cargo}</h2>
            <span className="empresa">{t.experiencia.exp3Empresa}</span>
            <p className="descricao">{t.experiencia.exp3Desc}</p>
          </div>
        </div>

        {/* Experiência 5 (Último item) */}
        <div className="experiencia-item">
          <div className="experiencia-data">
            <span>22/07/2019 - 23/10/2020</span>
            <span className="area-ti">{t.experiencia.areaTI}</span>
          </div>
          <div className="experiencia-conteudo">
            <h2 className="cargo">{t.experiencia.exp5Cargo}</h2>
            <span className="empresa">{t.experiencia.exp5Empresa}</span>
            <p className="descricao">{t.experiencia.exp5Desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experiencia;