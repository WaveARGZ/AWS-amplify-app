import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJDgJk7ULpc7YH9SlYbzOBT1xkK_rZQvE",
    authDomain: "line-clone-18b39.firebaseapp.com",
    projectId: "line-clone-18b39",
    storageBucket: "line-clone-18b39.appspot.com",
    messagingSenderId: "762324687470",
    appId: "1:762324687470:web:a32abfb4510d1cbe66647f"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };