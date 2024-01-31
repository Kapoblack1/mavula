// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX9Tgubveaz1tCn5GHV6UIInXd-ZTGKvs",
    authDomain: "chat-e3544.firebaseapp.com",
    projectId: "chat-e3544",
    storageBucket: "chat-e3544.appspot.com",
    messagingSenderId: "276088463280",
    appId: "1:276088463280:web:985624e84bd72cda3d0075"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);