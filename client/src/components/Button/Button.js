import React from 'react';

import './Button.css';

export const Button = ({ onClick, isActive, value }) => (
  <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>
    {value}
  </button>
);
