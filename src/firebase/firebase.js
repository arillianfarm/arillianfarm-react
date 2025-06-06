// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "arillian-farm.firebaseapp.com",
    projectId: "arillian-farm",
    storageBucket: "arillian-farm.firebasestorage.app",
    messagingSenderId: "852256409898",
    appId: "1:852256409898:web:6331db4b6664e65ddaf653",
    measurementId: "G-9CMMJFWNVV"
};

let app;
let analytics;
let db;
let firebaseInitialized = false; // Add a flag to track successful initialization

try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app); // Note: Analytics might still log warnings if the key is invalid but won't crash here.
    db = getFirestore(app);
    firebaseInitialized = true; // Set flag to true if initialization is successful
    console.log("Firebase initialized successfully."); // Confirm success
} catch (error) {
    console.error("Firebase initialization failed:", error);
    // You can also set a global state or flag here if you have a state management system
    // For now, we'll just log and let the undefined variables handle downstream gracefully
    app = null; // Set to null or undefined to indicate failure
    analytics = null;
    db = null;
    firebaseInitialized = false;
}

// Export the initialized instances, or null if initialization failed.
// Components importing these will need to check if they are null/undefined.
export { app, analytics, db, firebaseInitialized };