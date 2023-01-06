import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='/game-rock-paper-scissors'>
    <App />
  </BrowserRouter>
);

