
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1p8S9-WA7WHMH49Bxf261zKzUdei6GgE",
  authDomain: "ecommerce-f0b78.firebaseapp.com",
  projectId: "ecommerce-f0b78",
  storageBucket: "ecommerce-f0b78.firebasestorage.app",
  messagingSenderId: "884668982390",
  appId: "1:884668982390:web:8d11399a8d37d42bd9eb57"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };