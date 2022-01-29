import dotenv from 'dotenv';
import {initializeApp} from '@firebase/app';
import {getFirestore} from '@firebase/firestore';
import {getAuth} from '@firebase/auth';

dotenv.config();

console.log(process.env.API_KEY);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.AUTH_DOM,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STO_BUCK,
  messagingSenderId: process.env.MSSGSEND_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);