// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5d0YWLQqez-hg0Wp0xnZtbg6bPSnWC-o",
  authDomain: "blue-manga-app.firebaseapp.com",
  projectId: "blue-manga-app",
  storageBucket: "blue-manga-app.appspot.com",
  messagingSenderId: "679919396531",
  appId: "1:679919396531:web:df779c4e0d16e41a45b2c6",
  measurementId: "G-CD110KBPG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);