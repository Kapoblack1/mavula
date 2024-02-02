// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5FeeuBqCRXBMM8TdbGpJHabnEGvSyA0c",
  authDomain: "expo-firebase-57bba.firebaseapp.com",
  projectId: "expo-firebase-57bba",
  storageBucket: "expo-firebase-57bba.appspot.com",
  messagingSenderId: "363392890996",
  appId: "1:363392890996:web:3f64026b0f8c2deed0b921"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);