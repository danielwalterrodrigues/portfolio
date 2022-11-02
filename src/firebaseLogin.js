// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQWvy-A4wX7mO87ORZlaM-v1qUHCuSnJI",
  authDomain: "portfolio-daniel-rodrigues.firebaseapp.com",
  projectId: "portfolio-daniel-rodrigues",
  storageBucket: "portfolio-daniel-rodrigues.appspot.com",
  messagingSenderId: "843998880639",
  appId: "1:843998880639:web:da07f95b9f01b70f87304a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {firebaseApp}