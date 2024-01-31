// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1h1JIKNsGg7njSfWRM-cLogXfMV-zBw",
  authDomain: "rnauthvideo-e66de.firebaseapp.com",
  projectId: "rnauthvideo-e66de",
  storageBucket: "rnauthvideo-e66de.appspot.com",
  messagingSenderId: "943012848249",
  appId: "1:943012848249:web:35a6d06f21b5d8fca5eaa8",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);