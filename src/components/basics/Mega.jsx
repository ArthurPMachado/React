import React, { useState } from 'react';
import gerarNumeros from '../helper/gerarNumeros';

function Mega(props) {
  const [qtdeSorteada, setQtdeSorteada] = useState();
  const [numerosMegaSena, setNumerosMegaSena] = useState([]);

  return (
    <div>
      <h1>Números da Mega Sena</h1>
      <p style={{ fontSize: '1.5rem' }}>{numerosMegaSena.join(' ')}</p>
      <input
        style={{ fontSize: '1.4rem' }}
        type="number"
        onChange={(event) => setQtdeSorteada(+event.target.value)}
      />
      <button
        type="button"
        onClick={() => setNumerosMegaSena(gerarNumeros(qtdeSorteada))}
      >
        Gerar nova rodada da Mega Sena
      </button>
    </div>
  );
}

export default Mega;
