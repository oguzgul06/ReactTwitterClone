import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_Yj5x7crLfiHi1BSIKYh7vVPiQw50ZlI",
  authDomain: "twitter-clone-55071.firebaseapp.com",
  projectId: "twitter-clone-55071",
  storageBucket: "twitter-clone-55071.appspot.com",
  messagingSenderId: "176637445521",
  appId: "1:176637445521:web:ccc0ba0b68423871020630",
  measurementId: "G-FH3Q7Z4E9R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
