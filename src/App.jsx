import React from 'react';

import Primeiro from './components/basics/Primeiro';
import Propriedades from './components/basics/Propriedades';
import Fragmento from './components/basics/Fragmento';

function App() {
  return (
    <div>
      <Primeiro />
      <Propriedades
        titulo="Situação do Aluno"
        aluno="Arthur Machado"
        nota={9.3}
      />
      <Fragmento />
    </div>
  );
}

export default App;
