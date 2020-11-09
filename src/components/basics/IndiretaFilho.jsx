import React from 'react';

function IndiretaFilho(props) {
  const { acionar } = props;

  return (
    <div>
      <div>
        Teste
      </div>
      <button
        type="button"
        onClick={() => acionar('Pedro', 53, true)}
      >
        Fornecer Informações
      </button>
    </div>
  );
}

export default IndiretaFilho;
