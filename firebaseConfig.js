// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBIL-vbJWjeyCAQ6t9gPqPsHfHhvU9wKI",
  authDomain: "jeremyportfolio-ece9f.firebaseapp.com",
  projectId: "jeremyportfolio-ece9f",
  storageBucket: "jeremyportfolio-ece9f.firebasestorage.app",
  messagingSenderId: "136559391663",
  appId: "1:136559391663:web:24dad0258e68c4107e355a",
  measurementId: "G-RGGF49HGR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);