// src/firebase/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"; // <-- Import Firestore for your comments DB
// import { getAuth } from "firebase/auth"; // <-- If you need authentication later

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "arillian-farm.firebaseapp.com",
    projectId: "arillian-farm",
    storageBucket: "arillian-farm.firebasestorage.app",
    messagingSenderId: "852256409898",
    appId: "1:852256409898:web:6331db4b6664e65ddaf653",
    measurementId: "G-9CMMJFWNVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Analytics is initialized, but often used implicitly by Firebase if configured.

// Initialize Firebase services you need
const db = getFirestore(app); // <-- Get a reference to Firestore for your database operations

// Export the Firebase app instance and any services you'll use
export { app, analytics, db };