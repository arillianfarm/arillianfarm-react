// polyfill-util.js
try {
    const { TextEncoder, TextDecoder } = require('util');
    if (typeof global.TextEncoder === 'undefined') {
        global.TextEncoder = TextEncoder;
    }
    if (typeof global.TextDecoder === 'undefined') {
        global.TextDecoder = TextDecoder;
    }
} catch (e) {
    console.error("Failed to apply TextEncoder polyfill:", e.message);
}