import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: "terrader-ad90c.firebaseapp.com",
    projectId: "terrader-ad90c",
    storageBucket: "terrader-ad90c.appspot.com",
    messagingSenderId: "92244762996",
    appId: "1:92244762996:web:09d64fabb60b5b16bd4c21",
    measurementId: "G-JQS78110RZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
