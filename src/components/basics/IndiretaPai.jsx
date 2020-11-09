import React from 'react';
import IndiretaFilho from './IndiretaFilho';

function IndiretaPai(props) {
  // nome idade velho
  function fornecerInformacoes(nome, idade, velho) {
    console.log(nome, idade, velho);
  }

  return (
    <div>
      <div>
        Teste
      </div>
      <IndiretaFilho acionar={fornecerInformacoes} />
    </div>
  );
}

export default IndiretaPai;
