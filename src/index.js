import React from 'react';
import ReactDOM from 'react-dom/client';
import smoothscroll from 'smoothscroll-polyfill';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();
