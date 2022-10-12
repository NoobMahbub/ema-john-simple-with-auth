// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcEnuU8ShCBosC0E1ZI8Kfe_DQAtx6FjQ",
    authDomain: "ema-john-simple-7585f.firebaseapp.com",
    projectId: "ema-john-simple-7585f",
    storageBucket: "ema-john-simple-7585f.appspot.com",
    messagingSenderId: "981393197981",
    appId: "1:981393197981:web:6ddfd5ce98e10bf8653d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;