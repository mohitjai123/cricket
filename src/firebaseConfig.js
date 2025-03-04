// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtBRGgFv0YZqNGYqEBd3NSdvXLJ0ZqF_c",
  authDomain: "mjpl-d1017.firebaseapp.com",
  projectId: "mjpl-d1017",
  storageBucket: "mjpl-d1017.firebasestorage.app",
  messagingSenderId: "198094284593",
  appId: "1:198094284593:web:3f0a3ea215ff9f083ab210"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage
const db = getFirestore(app);

export { db };
