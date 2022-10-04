// Import the functions you need from the SDKs you need

import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyANsQLx1NrQhtYyH3vajli_41k57nmWmRw",
  authDomain: "jelly-auth.firebaseapp.com",
  projectId: "jelly-auth",
  storageBucket: "jelly-auth.appspot.com",
  messagingSenderId: "298427930047",
  appId: "1:298427930047:web:8e72f59074d31f6ddd7d0a",
  measurementId: "G-ZD1200C9WC"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };