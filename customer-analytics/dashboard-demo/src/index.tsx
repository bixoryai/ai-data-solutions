import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './tailwind.css'; // Corrected import path

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 