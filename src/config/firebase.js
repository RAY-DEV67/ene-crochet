import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {getFirestore} from "firebase/firestore"

// NEW CONFIG ////////////////////////////

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHb4UXcCyDUYdiRMz2pmy4_lK0eVuoSDM",
  authDomain: "ene-crochet.firebaseapp.com",
  projectId: "ene-crochet",
  storageBucket: "ene-crochet.appspot.com",
  messagingSenderId: "601911509136",
  appId: "1:601911509136:web:19bee9589cc74aadfd9815",
  measurementId: "G-HCR0C5N4Q3"
});

// Initialize Firebase
const app = firebaseApp;

const db = firebaseApp.firestore()

// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app)
export const storage = firebase.storage()
export default db

