import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


initializeApp({
  apiKey: "AIzaSyBUQrnxVDlskVLSoOAK8UW2DQtTTktSKYs",
  authDomain: "tuiter-project-94ac8.firebaseapp.com",
  projectId: "tuiter-project-94ac8",
  storageBucket: "tuiter-project-94ac8.appspot.com",
  messagingSenderId: "34037291031",
  appId: "1:34037291031:web:297f652c30ecdcd1722452"
});

export const db = getFirestore();