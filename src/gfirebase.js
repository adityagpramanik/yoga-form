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

var db = firebase.firestore;

export {db};