// polyfill-util.js
// Final attempt to force global polyfill for JSDOM environment
try {
    const { TextEncoder, TextDecoder } = require('util');
    if (typeof global.TextEncoder === 'undefined') {
        global.TextEncoder = TextEncoder;
    }
    if (typeof global.TextDecoder === 'undefined') {
        global.TextDecoder = TextDecoder;
    }
} catch (e) {
    // If 'util' isn't found, we're stuck, but this should be fine in a Node environment
    console.error("Failed to apply TextEncoder polyfill:", e.message);
}