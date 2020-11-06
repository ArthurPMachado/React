import React, { cloneElement, Children } from 'react';

function Familia(props) {
  const { children } = props;

  return (
    <div>
      {
        Children.map(children, (child) => cloneElement(child, props))
      }
    </div>
  );
}

export default Familia;
