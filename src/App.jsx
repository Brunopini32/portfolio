import React from 'react'
import { LanguageProvider } from './LanguageContext' // <-- Importe o Provider
import Hero from './Hero'
import Sobre from './Sobre'
import Competencias from './Competencias'
import Projetos from './Projetos'
import Experiencia from './Experiencia'
import Cursos from './Cursos'
import Contato from './Contato'

function App() {
  return (
    <LanguageProvider> {/* <-- Envolve tudo */}
      <div className="App">
        <Hero />
        <Sobre />
        <Competencias />
        <Projetos />
        <Experiencia />
        <Cursos />
        <Contato />
      </div>
    </LanguageProvider>
  )
}

export default App