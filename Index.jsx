import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // si tenés estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
