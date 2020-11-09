import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

function IndiretaPai(props) {
  const [nome, setNome] = useState('?');
  const [idade, setIdade] = useState(0);
  const [velho, setVelho] = useState(false);

  function fornecerInformacoes(nomeParam, idadeParam, velhoParam) {
    setNome(nomeParam);
    setIdade(idadeParam);
    setVelho(velhoParam);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span><strong> {idade} </strong></span>
        <span>{velho ? 'Verdadeiro' : 'Falso'}</span>
      </div>
      <IndiretaFilho acionar={fornecerInformacoes} />
    </div>
  );
}

export default IndiretaPai;
