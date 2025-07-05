// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "translator-bot-24299.firebaseapp.com",
  projectId: "translator-bot-24299",
  storageBucket: "translator-bot-24299.firebasestorage.app",
  messagingSenderId: "677281476426",
  appId: "1:677281476426:web:5fd8438909ca2d835e9bb3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
