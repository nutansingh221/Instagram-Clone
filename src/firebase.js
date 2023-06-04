import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_OnpbNoeTfoLoiZHgajEOdKg0Gp5kxfo",
    authDomain: "instagram-clone-aadef.firebaseapp.com",
    databaseURL: "https://instagram-clone-aadef-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-aadef",
    storageBucket: "instagram-clone-aadef.appspot.com",
    messagingSenderId: "364608322634",
    appId: "1:364608322634:web:1d15227d4cc85dd9bfbab3"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};