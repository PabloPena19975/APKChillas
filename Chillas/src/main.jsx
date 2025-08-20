import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // o IonReactRouter para Ionic
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* Esto es clave para react-router-dom */}
    <App />
  </BrowserRouter>
);
