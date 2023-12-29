// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJhFDQGsVXIegro_giheYq15v55G50F3c",
    authDomain: "mavulaisptec.firebaseapp.com",
    projectId: "mavulaisptec",
    storageBucket: "mavulaisptec.appspot.com",
    messagingSenderId: "1013144740471",
    appId: "1:1013144740471:web:811131a7395e0066b5dc72"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);