// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd6XGfU8uOgqhlxW4nDjoiPdwUn8mwPSs",
  authDomain: "react-cursos-a12f0.firebaseapp.com",
  projectId: "react-cursos-a12f0",
  storageBucket: "react-cursos-a12f0.appspot.com",
  messagingSenderId: "677878898049",
  appId: "1:677878898049:web:db3d0dd0a37077677a9c80"
};

// Initialize Firebase
export const FireBaseApp = initializeApp( firebaseConfig );
export const FireBaseAuth = getAuth( FireBaseApp ); 
export const FireBaseDB = getFirestore( FireBaseApp );