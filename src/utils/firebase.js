// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_NVOSrtjpaOs7gyg_MIRYJEoe3W786L4",
  authDomain: "netflixgpt-2114f.firebaseapp.com",
  projectId: "netflixgpt-2114f",
  storageBucket: "netflixgpt-2114f.appspot.com",
  messagingSenderId: "952023145521",
  appId: "1:952023145521:web:d03520ad088003366d0910",
  measurementId: "G-W31P2XPBCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);