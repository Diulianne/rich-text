import firebase from "firebase/app";
import "firebase/firebase-auth"
import "firebase/firebase-firestore"

//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwFkFRB2UtpzwE3MmsCMMAnwHf8SOdyao",
  authDomain: "docs-diuli.firebaseapp.com",
  projectId: "docs-diuli",
  storageBucket: "docs-diuli.appspot.com",
  messagingSenderId: "106873879443",
  appId: "1:106873879443:web:92ca7b2d60c05f496dc666"
};



const app = firebase.initializeApp(firebaseConfig);

  //const app = initializeApp(firebaseConfig);

 // const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  //const db = getFirestore(app);

  export { db };

  //os que estão comentado são os que deram certo antes

export default firebase

