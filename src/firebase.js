import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Dummy Firebase configuration - To be replaced by USER
const firebaseConfig = {
    apiKey: "AIzaSy_DUMMY_KEY_FOR_TEMPORARY_USE_12345",
    authDomain: "autoagents-landing.firebaseapp.com",
    projectId: "autoagents-landing",
    storageBucket: "autoagents-landing.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef1234567890",
    measurementId: "G-DUMMYID"
};

// Initialize Firebase (Temporarily disabled to prevent invalid API key errors)
/*
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let analytics;

if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}
*/

// Export stubs so the app runs without network calls
const db = null;
const auth = null;
const analytics = null;

export { db, auth, analytics };
