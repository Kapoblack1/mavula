// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV4S62rtlinyUWPa4rBVXLpExAUwtcsa8",
  authDomain: "mavula-203ce.firebaseapp.com",
  projectId: "mavula-203ce",
  storageBucket: "mavula-203ce.appspot.com",
  messagingSenderId: "1042915394545",
  appId: "1:1042915394545:web:0a5c97e5ccc13b068ffa50",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);