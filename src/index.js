// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- This import is vital
import App from './App';
import './index.css'; // Your global CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- App must be wrapped inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);