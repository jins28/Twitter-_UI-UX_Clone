import * as firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNlO4PvxtJCCiMLviuv4hH7Hz6xGMMq7k",
    authDomain: "twitter-clone-7d7d8.firebaseapp.com",
    projectId: "twitter-clone-7d7d8",
    storageBucket: "twitter-clone-7d7d8.appspot.com",
    messagingSenderId: "319439446035",
    appId: "1:319439446035:web:fb3dbebc26bf0017681fe6",
    measurementId: "G-EXEEWZKGMK"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;