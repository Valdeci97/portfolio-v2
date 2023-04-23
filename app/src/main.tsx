import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

const main = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(main);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
