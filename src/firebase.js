// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq01_oGseswsCt-e_O3b_KotUoH4I22LY",
  authDomain: "msgmeincog.firebaseapp.com",
  projectId: "msgmeincog",
  storageBucket: "msgmeincog.appspot.com",
  messagingSenderId: "364746017433",
  appId: "1:364746017433:web:ba66dadb196d480491c608",
  measurementId: "G-W45Q2G14EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export default db;
