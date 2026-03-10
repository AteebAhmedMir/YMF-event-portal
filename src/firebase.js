import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvQvCWoWz8f0orTOLniGz661iKFf3tOwg",
    authDomain: "ymforum-event-portal.firebaseapp.com",
    projectId: "ymforum-event-portal",
    storageBucket: "ymforum-event-portal.firebasestorage.app",
    messagingSenderId: "380392431674",
    appId: "1:380392431674:web:7193b21863e174e6f5d503",
    measurementId: "G-KDQ9BT4TJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
let analytics;

if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { db, auth, analytics };
