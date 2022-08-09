import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // CRIAREMOS NOSSO PRÓPRIO ESTILO PARA O APP
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
