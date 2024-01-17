import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK4EcvQR0YBRj8UDo-CJCjQ8e1Y9klj7Y",
  authDomain: "fir-auth-a7699.firebaseapp.com",
  projectId: "fir-auth-a7699",
  storageBucket: "fir-auth-a7699.appspot.com",
  messagingSenderId: "1006475512441",
  appId: "1:1006475512441:web:18ae4f988a7ad2f991e2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db }