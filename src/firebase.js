// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAFN1W-b25Juc7QNbZ4ZoUU-nB3U4ekY58",
  authDomain: "registration-36f08.firebaseapp.com",
  projectId: "registration-36f08",
  storageBucket: "registration-36f08.appspot.com",
  messagingSenderId: "485478409927",
  appId: "1:485478409927:web:01e8d45b0ea1722430c0e2",
  measurementId: "G-CFC6B5892K"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;