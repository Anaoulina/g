// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore' 
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVSgyx04oHjYaZA_oZRsMOurQGKZkaklc",
  authDomain: "piggybank-c09e8.firebaseapp.com",
  projectId: "piggybank-c09e8",
  storageBucket: "piggybank-c09e8.appspot.com",
  messagingSenderId: "1078528607899",
  appId: "1:1078528607899:web:fa641f46662b3b3aa4a83e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app ;