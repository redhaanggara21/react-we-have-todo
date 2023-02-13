import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// REACT_APP_FIREBASE_API_KEY=AIzaSyBiVbdL3rdPsRKGu4lE4mdbsSUhIzDPqGo
// REACT_APP_FIREBASE_AUTH_DOMAIN=marisa-72844.firebaseapp.com
// REACT_APP_FIREBASE_DB_URL=https://marisa-72844-default-rtdb.asia-southeast1.firebasedatabase.app
// REACT_APP_FIREBASE_PROJECT_ID=marisa-72844
// REACT_APP_FIREBASE_STORAGE_BUCKET=marisa-72844.appspot.com
// REACT_APP_FIREBASE_MESSAGING_ID=379114766332
// REACT_APP_FIREBASE_APP_ID=1:379114766332:web:9c6aed52714c4195f77c79
// REACT_APP_FIREBASE_AUTH_CLIENT_ID=379114766332-9htf613io45to1iban28qvvd63ig5g7o.apps.googleusercontent.com
// REACT_APP_FIREBASE_AUTH_CLIENT_SECRET=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

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_AUTH_CLIENT_ID
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
