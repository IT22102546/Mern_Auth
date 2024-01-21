// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a9148.firebaseapp.com",
  projectId: "mern-auth-a9148",
  storageBucket: "mern-auth-a9148.appspot.com",
  messagingSenderId: "799630238203",
  appId: "1:799630238203:web:6d576c1edd0727c1c4ab5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);