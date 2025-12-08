// src/polyfill.js - Refined Polyfills for JSDOM/react-snapshot

const context = typeof window !== 'undefined' ? window : global;

// 1. requestAnimationFrame Polyfill
if (typeof context.requestAnimationFrame === 'undefined') {
    context.requestAnimationFrame = (callback) => {
        return setTimeout(callback, 0);
    };
}

// 2. TextEncoder/TextDecoder Polyfill (FIXED)
// Use the installed 'text-encoding' library if missing in the context.
if (typeof context.TextEncoder === 'undefined') {
    try {
        const { TextEncoder, TextDecoder } = require('text-encoding');
        context.TextEncoder = TextEncoder;
        context.TextDecoder = TextDecoder;
    } catch (e) {
        console.error("Failed to load text-encoding polyfill:", e);
    }
}

// 3. sessionStorage Polyfill
if (typeof context.sessionStorage === 'undefined') {
    context.sessionStorage = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
    };
}

// 4. HTMLCanvasElement.prototype.getContext Polyfill (Kept from previous suggestion)
if (typeof context.HTMLCanvasElement !== 'undefined' && typeof context.HTMLCanvasElement.prototype.getContext !== 'function') {
    context.HTMLCanvasElement.prototype.getContext = function() {
        return {
            fillRect: function() {},
            clearRect: function() {},
            getImageData: function(x, y, w, h) {
                return { data: new Array(w * h * 4).fill(0) };
            },
            putImageData: function() {},
            createImageData: function() { return []; },
            measureText: function() { return { width: 0 }; },
            setTransform: function() {},
            drawImage: function() {},
            save: function() {},
            fillText: function() {},
            restore: function() {},
            beginPath: function() {},
            moveTo: function() {},
            lineTo: function() {},
            closePath: function() {},
            stroke: function() {},
            translate: function() {},
            scale: function() {},
            rotate: function() {},
            arc: function() {},
            fill: function() {},
            transform: function() {},
            rect: function() {},
            clip: function() {},
        };
    };
}

// 5. Headers Polyfill (Handling Firebase issue - Kept from previous suggestion)
if (typeof context.Headers === 'undefined' && typeof require === 'function') {
    try {
        const { Headers } = require('node-fetch');
        context.Headers = Headers;
    } catch (e) {
        if (typeof context.Headers === 'undefined') {
            context.Headers = class Headers {};
        }
    }
}

// Add Canvas support for JSDOM/react-snapshot
// This is required if any dependency (like Firebase Analytics) uses the Canvas API
if (typeof window !== 'undefined' && window.document && window.document.createElement) {
    // Check if we are in the JSDOM environment used by react-snapshot
    if (typeof window.document.createElement('canvas').getContext === 'undefined') {
        const { createCanvas } = require('canvas');

        window.document.createElement('canvas').getContext = function (type) {
            if (type === '2d') {
                return createCanvas(200, 200).getContext('2d');
            }
            return null;
        };
    }
}

// 6. fetch Polyfill (FIXED)
if (typeof context.fetch === 'undefined' && typeof require === 'function') {
    try {
        const fetch = require('node-fetch');
        context.fetch = fetch;
        context.Request = fetch.Request;
        context.Response = fetch.Response;
    } catch (e) {
        console.warn("Failed to polyfill fetch. Some libraries may fail.");
    }
}