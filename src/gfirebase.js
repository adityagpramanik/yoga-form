import dotenv from "dotenv"
import firebase from 'firebase/compat/app'

dotenv.config();

var firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.AUTH_DOM,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STO_BUCK,
  messagingSenderId: process.env.MSSGSEND_ID,
  appId: process.env.APP_ID,
});

alert(process.env.API_KEY);
var db = firebase.firestore;
var auth = firebaseApp.auth;

// export {db};
// export {auth};

export {firebase};