// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn4QI2cBJneZcACDil8oT5Lp9_i8V8xwo",
  authDomain: "resonate-contacts-technical.firebaseapp.com",
  projectId: "resonate-contacts-technical",
  storageBucket: "resonate-contacts-technical.appspot.com",
  messagingSenderId: "923381113066",
  appId: "1:923381113066:web:2305a89fdc6088efe3f793",
  measurementId: "G-18GE4KWDTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);