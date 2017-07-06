import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from '../components/Pokemon.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pokemon />, div);
});
