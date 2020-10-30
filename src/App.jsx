import React from 'react';

import Primeiro from './components/basics/Primeiro';
import Propriedades from './components/basics/Propriedades';
import Fragmento from './components/basics/Fragmento';
import NumeroAleatorio from './components/basics/NumeroAleatorio';
import Card from './components/layout/Card';

function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>

      <Card titulo="#04 - Desafio Numero Aleatorio">
        <NumeroAleatorio
          min={10}
          max={100}
        />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Propriedades">
        <Propriedades
          titulo="Situação do Aluno"
          aluno="Arthur Machado"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>

    </div>
  );
}

export default App;
