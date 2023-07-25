import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAYPjbeqUzq_XqFPLf-rZD1sUbLaHoYjU",
  authDomain: "sabrina-kitaka-portfolio.firebaseapp.com",
  projectId: "sabrina-kitaka-portfolio",
  storageBucket: "sabrina-kitaka-portfolio.appspot.com",
  messagingSenderId: "821454824108",
  appId: "1:821454824108:web:a1c9ad7e56415777f07509",
  measurementId: "G-46TRD83HND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const db = getStorage(app);
