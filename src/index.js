// src/index.js

// Must be the first import to ensure polyfills are set up before React/App runs
import './polyfill';

import React from 'react';
// Import 'render' specifically from react-snapshot
import { render } from 'react-snapshot';
import './index.css';
import App from './App';

// Use render from react-snapshot instead of ReactDOM.render or createRoot
// This is what allows the prerendering process to capture your page content.
render(<App />, document.getElementById('root'));

// Note: If you were previously using ReactDOM.createRoot:
// import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
// This approach MUST be replaced with the 'react-snapshot' render for prerendering to work.