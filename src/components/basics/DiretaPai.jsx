import React from 'react';
import DiretaFilho from './DiretaFilho';

function DiretaPai(props) {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} adulto />
      <DiretaFilho nome="Gabriel" idade={17} />
    </div>
  );
}

export default DiretaPai;
