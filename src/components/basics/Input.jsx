import React, { useState } from 'react';

function Input(props) {
  const [valor, setValor] = useState('Inicial');

  return (
    <div>
      <h2>{valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <input
          style={{ fontSize: '1.4rem' }}
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
        <input
          style={{ fontSize: '1.4rem' }}
          value={valor}
          readOnly
        />
        <input
          style={{ fontSize: '1.4rem' }}
          value={undefined}
        />
      </div>
    </div>
  );
}

export default Input;
