import React from 'react'; // eslint-disable-line
import { render } from 'react-dom'; // eslint-disable-line
import App from './app';
import './main.styl';

const rootElement = document.getElementById('root');

render(
  <App />,
  rootElement
);
