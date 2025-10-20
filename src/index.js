import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Existing logic for handling redirects via sessionStorage
const redirectPath = sessionStorage.redirect;
delete sessionStorage.redirect;

const rootElement = document.getElementById('root');

// --- START: REACT-SNAP HYDRATION LOGIC ---

// Check if the root element already contains server-rendered/pre-rendered HTML.
if (rootElement.hasChildNodes()) {
    // If content exists, use hydrateRoot to attach React to the existing DOM (Essential for react-snap).
    ReactDOM.hydrateRoot(
        rootElement,
        <React.StrictMode>
            <App initialPath={redirectPath} />
        </React.StrictMode>
    );
} else {
    // If content is empty (standard client-side rendering), use createRoot().render() normally.
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App initialPath={redirectPath} />
        </React.StrictMode>
    );
}

// --- END: REACT-SNAP HYDRATION LOGIC ---

// to start measuring performance, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

