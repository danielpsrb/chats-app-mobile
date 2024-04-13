// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBDwPPaAw1L5xf2D0D5VUR_jCuo1mTDzE",
    authDomain: "chat-app-mobile-ed4cf.firebaseapp.com",
    projectId: "chat-app-mobile-ed4cf",
    storageBucket: "chat-app-mobile-ed4cf.appspot.com",
    messagingSenderId: "408402698736",
    appId: "1:408402698736:web:defe49fff371b651ddfd35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');