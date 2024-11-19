import React from 'react';
import './Button.css';

function Button({ onClick, action, className }) {
  return (<button onClick={onClick} 
    className={className}>
    {action}
  </button>);
}

export default Button;
