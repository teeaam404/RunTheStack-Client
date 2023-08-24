// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhI64_R3cBuuQ2E6v5nFLYN79lGUHfBPQ",
  authDomain: "run-the-stack.firebaseapp.com",
  projectId: "run-the-stack",
  storageBucket: "run-the-stack.appspot.com",
  messagingSenderId: "332482092908",
  appId: "1:332482092908:web:f201e689a4b8c125d41d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;