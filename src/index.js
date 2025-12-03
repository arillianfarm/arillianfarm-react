import React from 'react';
// Standard React 18 imports for client-side rendering/hydration
import { createRoot, hydrateRoot } from 'react-dom/client';

// Legacy ReactDOM import MUST remain at the top level
// for the conditional 'require' inside the production block to work correctly.
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const redirectPath = sessionStorage.redirect;
delete sessionStorage.redirect;

const rootElement = document.getElementById('root');

// Component wrapper for clean rendering calls
const AppWithInitialPath = (
    <React.StrictMode>
        <App initialPath={redirectPath} />
    </React.StrictMode>
);

// --- Production Logic (Build Time & Deployed Site) ---
if (process.env.NODE_ENV === 'production') {
    // We use 'require' inside the conditional block to prevent the build system
    // from getting confused by the legacy code in the modern environment.
    const { snapshot } = require('react-snapshot');

    // 1. If pre-rendered content exists (deployed site), hydrate it
    if (rootElement.hasChildNodes()) {
        hydrateRoot(rootElement, AppWithInitialPath);
    } else {
        // 2. This is the code path taken *during* the 'npm run postbuild' (react-snapshot)
        // It runs once to generate the static HTML files.
        snapshot(AppWithInitialPath);
    }
} else {
    // --- Development Logic (npm start) ---
    // Use standard React 18 createRoot for fast local development iteration
    const root = createRoot(rootElement);
    root.render(AppWithInitialPath);
}

reportWebVitals();