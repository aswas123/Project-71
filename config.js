import firebase from "firebase";

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAkxlcNx70gGM2oX3rV8JnSMKFg6Ct2Wl0",
    authDomain: "e-ride-17348.firebaseapp.com",
    projectId: "e-ride-17348",
    storageBucket: "e-ride-17348.appspot.com",
    messagingSenderId: "527841676190",
    appId: "1:527841676190:web:2aa3a246e1c2406cc4e48f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
