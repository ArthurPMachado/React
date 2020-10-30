import React from 'react';

import Primeiro from './components/basics/Primeiro';
import Propriedades from './components/basics/Propriedades';
import Fragmento from './components/basics/Fragmento';
import NumeroAleatorio from './components/basics/NumeroAleatorio';

function App() {
  return (
    <div>
      <NumeroAleatorio
        min={10}
        max={100}
      />
      <Fragmento />
      <Propriedades
        titulo="Situação do Aluno"
        aluno="Arthur Machado"
        nota={9.3}
      />
      <Primeiro />
    </div>
  );
}

export default App;
