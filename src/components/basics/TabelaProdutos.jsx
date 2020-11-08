import React from 'react';
import produtos from '../../data/produtos';

function TabelaProdutos(props) {
  const renderProducts = produtos.map((produto) => (
    <li key={produto.id}>{produto.name} - R${produto.price}</li>));

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {renderProducts}
      </ul>
    </div>
  );
}

export default TabelaProdutos;
