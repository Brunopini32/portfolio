import "./App.css";

function App() {
  return (
    <div className="site">

      {/* =========================
          MENU
      ========================== */}
      <header className="header">
        <div className="container header-content">

          <div className="logo">
            Bruno Pini
          </div>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#competencias">Competências</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>

        </div>
      </header>


      <main>

        {/* =========================
            INÍCIO
        ========================== */}
        <section id="inicio" className="hero">

          <div className="container hero-content">

            <p className="tag">
              PORTFÓLIO DE TECNOLOGIA
            </p>

            <h1>
              Redes, Infraestrutura
              <br />
              <span>e Tecnologia</span>
            </h1>

            <p className="hero-text">
              Olá, sou Bruno Pini, estudante de Engenharia
              da Computação com interesse em Redes,
              Infraestrutura, Linux e Suporte de TI.
            </p>

            <div className="buttons">

              <a
                href="#projetos"
                className="button primary"
              >
                Ver projetos
              </a>

              <a
                href="https://github.com/Brunopini32"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            SOBRE
        ========================== */}
        <section id="sobre" className="section">
  <div className="container about">
    <div className="about-content">
      <p className="section-tag">SOBRE MIM</p>

      <h2>Quem sou eu</h2>

      <p>
        Sou estudante de Engenharia da Computação, com foco no desenvolvimento
        de conhecimentos em Redes, Infraestrutura de TI, Linux e Desenvolvimento
        Front-end.
      </p>

      <p>
        Ao longo da graduação, venho desenvolvendo projetos práticos envolvendo
        redes de computadores, sistemas, bancos de dados, Linux, infraestrutura
        e desenvolvimento de interfaces web, buscando transformar os
        conhecimentos acadêmicos em experiências práticas.
      </p>

      <p>
        Busco minha primeira oportunidade profissional na área de TI, onde
        possa aplicar meus conhecimentos, aprender continuamente e contribuir
        para o desenvolvimento e evolução de soluções tecnológicas.
      </p>
    </div>
  </div>
</section>

        {/* =========================
            COMPETÊNCIAS
        ========================== */}
        <section
          id="competencias"
          className="section dark-section"
        >

          <div className="container">

            <p className="section-tag">
              CONHECIMENTOS
            </p>

            <h2>
              Competências
            </h2>

            <div className="skills">

              {/* REDES */}
              <div className="skill">

                <h3>
                  Redes
                </h3>

                <p>
                  Redes de computadores, TCP/IP,
                  conectividade e infraestrutura.
                </p>

              </div>


              {/* LINUX */}
              <div className="skill">

                <h3>
                  Linux
                </h3>

                <p>
                  Terminal, administração de sistemas,
                  usuários, permissões e serviços.
                </p>

              </div>


              {/* INFRAESTRUTURA */}
              <div className="skill">

                <h3>
                  Infraestrutura
                </h3>

                <p>
                  Servidores, virtualização e conceitos
                  de infraestrutura de TI.
                </p>

              </div>


              {/* SQL */}
              <div className="skill">

                <h3>
                  SQL
                </h3>

                <p>
                  Banco de dados, consultas SQL e
                  SQLite.
                </p>

              </div>


              {/* GIT */}
              <div className="skill">

                <h3>
                  Git & GitHub
                </h3>

                <p>
                  Controle de versão e gerenciamento
                  de projetos.
                </p>

              </div>


              {/* DESENVOLVIMENTO */}
              <div className="skill">

                <h3>
                  Desenvolvimento Web
                </h3>

                <p>
                  JavaScript, React.js, Node.js,
                  HTML e CSS.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            PROJETOS
        ========================== */}
        <section
          id="projetos"
          className="section projects-section"
        >

          <div className="container">

            <p className="section-tag">
              MEUS TRABALHOS
            </p>

            <h2>
              Meus Projetos
            </h2>

            <p className="projects-subtitle">
              Alguns dos projetos que desenvolvi durante
              a graduação e estágio.
            </p>


            <div className="projects">


              {/* =====================
                  PROJETO 01
              ====================== */}
              <article className="project">

                <div className="project-top">

                  <div className="project-number">
                    01
                  </div>

                  <div className="project-line"></div>

                  <span className="project-type">
                    PROJETO
                  </span>

                  <div className="project-icon">
                    🔧
                  </div>

                </div>


                <div className="project-content">

                  <h3>
                    Sistema de Gestão para Oficina
                  </h3>

                  <p>
                    Sistema desenvolvido para gerenciamento
                    de clientes, veículos e serviços, com
                    acompanhamento de etapas e geração de
                    QR Codes.
                  </p>


                  <div className="technologies">

                    <span>
                      Python
                    </span>

                    <span>
                      Flask
                    </span>

                    <span>
                      Java
                    </span>

                    <span>
                      SQL
                    </span>

                    <span>
                      QR Code
                    </span>

                  </div>


                  <div className="project-buttons">

                    <a
                      href="#"
                      className="project-button primary-project"
                    >
                      Ver projeto →
                    </a>

                    <a
                      href="https://github.com/Brunopini32"
                      target="_blank"
                      rel="noreferrer"
                      className="project-button secondary-project"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </article>


              {/* =====================
                  PROJETO 02
              ====================== */}
              <article className="project">

                <div className="project-top">

                  <div className="project-number">
                    02
                  </div>

                  <div className="project-line"></div>

                  <span className="project-type">
                    PROJETO
                  </span>

                  <div className="project-icon">
                    📄
                  </div>

                </div>


                <div className="project-content">

                  <h3>
                    Sistema de Controle de Notas Fiscais
                  </h3>

                  <p>
                    Sistema desenvolvido durante estágio
                    para controle, armazenamento e consulta
                    de notas fiscais de entrega.
                  </p>


                  <div className="technologies">

                    <span>
                      React
                    </span>

                    <span>
                      Node.js
                    </span>

                    <span>
                      Express
                    </span>

                    <span>
                      SQLite
                    </span>

                  </div>


                  <div className="project-buttons">

                    <a
                      href="#"
                      className="project-button primary-project"
                    >
                      Ver projeto →
                    </a>

                    <a
                      href="https://github.com/Brunopini32"
                      target="_blank"
                      rel="noreferrer"
                      className="project-button secondary-project"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </article>




            </div>

          </div>

        </section>


        {/* =========================
            CONTATO
        ========================== */}
        <section
          id="contato"
          className="contact"
        >

          <div className="container">

            <p className="section-tag">
              CONTATO
            </p>

            <h2>
              Vamos conversar?
            </h2>

            <p>
              Você pode encontrar meus projetos e
              informações profissionais através dos
              links abaixo.
            </p>


            <div className="buttons">

              <a
                href="https://github.com/Brunopini32"
                target="_blank"
                rel="noreferrer"
                className="button primary"
              >
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/bruno-pini-0a4a5b148/"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          RODAPÉ
      ========================== */}
      <footer>

        <div className="container">

          <p>
            © 2026 Bruno Pini — Portfólio de TI
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;