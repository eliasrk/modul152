// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWpQepz9V_piGaPUv53rBrsQEgW0_SG20",
  authDomain: "modul152-e493c.firebaseapp.com",
  projectId: "modul152-e493c",
  storageBucket: "modul152-e493c.appspot.com",
  messagingSenderId: "654396779624",
  appId: "1:654396779624:web:ca9570dc6e87aea9189fdd"
  
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };