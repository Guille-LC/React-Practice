import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiRqdj9iuDlGedO5Kz2V-gQR-JRlAXJzg",
  authDomain: "sweet-merch.firebaseapp.com",
  projectId: "sweet-merch",
  storageBucket: "sweet-merch.firebasestorage.app",
  messagingSenderId: "638131654730",
  appId: "1:638131654730:web:22c0ff5b78cb57829816b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
