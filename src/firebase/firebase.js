// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // Import 'isSupported' along with 'getAnalytics'
// import { getAnalytics, isSupported } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: "arillian-farm.firebaseapp.com",
//     projectId: "arillian-farm",
//     storageBucket: "arillian-farm.firebasestorage.app",
//     messagingSenderId: "852256409898",
//     appId: "1:852256409898:web:6331db4b6664e65ddaf653",
//     measurementId: "G-9CMMJFWNVV"
// };
//
// let app;
// let analytics;
// let db;
// let firebaseInitialized = false;
//
// try {
//     // 1. Initialize the main app instance
//     app = initializeApp(firebaseConfig);
//     db = getFirestore(app);
//
//     // 2. Use a self-executing async function (or IIFE) for the conditional check
//     (async () => {
//         // Only initialize analytics if the current environment supports it (e.g., skips JSDOM/react-snapshot)
//         if (await isSupported()) {
//             analytics = getAnalytics(app);
//             // console.log("Firebase Analytics initialized."); // Optional log
//         } else {
//             analytics = null; // Ensure 'analytics' is explicitly null if not supported
//             // console.log("Firebase Analytics skipped (environment not supported)."); // Optional log
//         }
//     })();
//
//     firebaseInitialized = true;
//     console.log("Firebase initialized successfully.");
// } catch (error) {
//     console.error("Firebase initialization failed:", error);
//     app = null;
//     analytics = null;
//     db = null;
//     firebaseInitialized = false;
// }
//
// // Export the initialized instances, or null if initialization failed.
// // Components importing these will need to check if they are null/undefined.
// export { app, analytics, db, firebaseInitialized };