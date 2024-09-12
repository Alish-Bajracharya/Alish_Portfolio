import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind or other global styles should be imported here
import App from './App';  // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Ensure there is an element with id="root" in your index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
