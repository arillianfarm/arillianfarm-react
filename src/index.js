import React from 'react';
// Use standard imports at the top
import { createRoot, hydrateRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'; // Legacy import needed for react-snapshot's snapshot() function
import { snapshot } from 'react-snapshot'; // Needed for the build
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

// --- Production Logic ---
if (process.env.NODE_ENV === 'production') {
    // 1. If pre-rendered content exists (deployed site), hydrate it
    if (rootElement.hasChildNodes()) {
        hydrateRoot(rootElement, AppWithInitialPath);
    } else {
        // 2. This is the path taken *during* the 'npm run postbuild' (react-snapshot)
        // Use legacy ReactDOM for snapshot compatibility
        snapshot(AppWithInitialPath);
    }
} else {
    // --- Development Logic (npm start) ---
    // Use standard React 18 createRoot for development
    const root = createRoot(rootElement);
    root.render(AppWithInitialPath);
}

reportWebVitals();