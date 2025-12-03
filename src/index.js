// src/index.js (Second Revised Version)
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const redirectPath = sessionStorage.redirect;
delete sessionStorage.redirect;

const rootElement = document.getElementById('root');
const AppWithInitialPath = (
    <React.StrictMode>
        <App initialPath={redirectPath} />
    </React.StrictMode>
);

if (process.env.NODE_ENV === 'production') {
    const { hydrateRoot } = require('react-dom/client');
    const { snapshot } = require('react-snapshot');
    const ReactDOM = require('react-dom');

    if (rootElement.hasChildNodes()) {
        hydrateRoot(rootElement, AppWithInitialPath);
    } else {
        snapshot(AppWithInitialPath);
    }
} else {
    const { createRoot } = require('react-dom/client');
    const root = createRoot(rootElement);
    root.render(AppWithInitialPath);
}

reportWebVitals();