import React from 'react';

import Familia from './components/basics/Familia';
import Primeiro from './components/basics/Primeiro';
import Propriedades from './components/basics/Propriedades';
import Fragmento from './components/basics/Fragmento';
import NumeroAleatorio from './components/basics/NumeroAleatorio';
import Card from './components/layout/Card';

import './app.css';

function App() {
  return (
    <div className="container">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card titulo="#05 - Componente com Filhos" cor="#00C8F8">
          <Familia sobrenome="Ferreira" />
        </Card>

        <Card titulo="#04 - Desafio Numero Aleatorio" cor="#FA6900">
          <NumeroAleatorio
            min={10}
            max={100}
          />
        </Card>

        <Card titulo="#03 - Fragmento" cor="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Propriedades" cor="#E8B71A">
          <Propriedades
            titulo="Situação do Aluno"
            aluno="Arthur Machado"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" cor="#588C73">
          <Primeiro />
        </Card>
      </div>

    </div>
  );
}

export default App;
