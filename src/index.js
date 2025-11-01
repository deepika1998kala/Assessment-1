import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // this file must exist
import App from './App';   // this file must exist in src


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
