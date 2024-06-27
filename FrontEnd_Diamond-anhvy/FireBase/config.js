
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA90drtznw8vWm5IVVy8aDphFtulLEnUUo",
  authDomain: "fpt-swp391.firebaseapp.com",
  projectId: "fpt-swp391",
  storageBucket: "fpt-swp391.appspot.com",
  messagingSenderId: "28463511425",
  appId: "1:28463511425:web:ac662818f893705741da80",
  measurementId: "G-N39SJCTXH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
