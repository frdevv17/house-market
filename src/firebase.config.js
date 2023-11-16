// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQFxGnXjBmXFETGpoL5Y6rsGY-MQbsHkg",
  authDomain: "house-marketplace-f79c8.firebaseapp.com",
  projectId: "house-marketplace-f79c8",
  storageBucket: "house-marketplace-f79c8.appspot.com",
  messagingSenderId: "230061502107",
  appId: "1:230061502107:web:2415c804b5a613a050a03e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app)