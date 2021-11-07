// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEjH22nHQiEJq5PDCxqqcah39Ui0b7pPg",
  authDomain: "uber-next-clone-e2c51.firebaseapp.com",
  projectId: "uber-next-clone-e2c51",
  storageBucket: "uber-next-clone-e2c51.appspot.com",
  messagingSenderId: "678426571098",
  appId: "1:678426571098:web:cd1c56b743aa9d498b8363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth } 