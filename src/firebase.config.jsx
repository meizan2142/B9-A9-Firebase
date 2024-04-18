// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID,
  apiKey: "AIzaSyAGyS1MtKieUmgBP37W5vtnXZPVBBqr9nc",
  authDomain: "assignment-9-firebase-a35a1.firebaseapp.com",
  projectId: "assignment-9-firebase-a35a1",
  storageBucket: "assignment-9-firebase-a35a1.appspot.com",
  messagingSenderId: "320345172974",
  appId: "1:320345172974:web:01234fe0a2215e3633fcff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;