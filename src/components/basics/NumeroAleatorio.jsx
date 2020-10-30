import React from 'react';

function NumeroAleatorio(props) {
  const { min, max } = props;

  const aleatorio = Math.floor(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Sorteio do numero aleatorio</h2>
      <p>{aleatorio}</p>
    </div>
  );
}

export default NumeroAleatorio;
