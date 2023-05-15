// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg2XIylU3ZYr4iHJ61GahxCMUimBH19NU",
  authDomain: "personal-4b62c.firebaseapp.com",
  projectId: "personal-4b62c",
  storageBucket: "personal-4b62c.appspot.com",
  messagingSenderId: "551369057411",
  appId: "1:551369057411:web:66665e62f6d225cac4a7b6",
  measurementId: "G-HBRESD3MR7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
