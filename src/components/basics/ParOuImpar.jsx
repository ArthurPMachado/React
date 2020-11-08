/* eslint-disable react/jsx-curly-newline */
import React from 'react';

function ParOuImpar(props) {
  const { numero } = props;

  const isPar = numero % 2 === 0;

  return (
    <div>
      { isPar
        ? <span>Par</span>
        : <span>Impar</span>
      }
    </div>
  );
}

export default ParOuImpar;
