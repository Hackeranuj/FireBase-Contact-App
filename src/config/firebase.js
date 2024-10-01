// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXgWMrMsvAPPZm2z_0KihxelSz4BWPvKY",
  authDomain: "contact-user-34d36.firebaseapp.com",
  projectId: "contact-user-34d36",
  storageBucket: "contact-user-34d36.appspot.com",
  messagingSenderId: "203888496682",
  appId: "1:203888496682:web:d733ab240124ebb036f353"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);