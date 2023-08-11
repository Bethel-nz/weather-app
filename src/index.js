import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const api_key = 'bf5095e731a9065d5f7e15a1ffb27ce2'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App ApiKey={api_key} />
  </React.StrictMode>
);

