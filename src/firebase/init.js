import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_GXShCGPeHEjJDOgrOJNYU89ioTMUgPI",
  authDomain: "portfolio-36893.firebaseapp.com",
  projectId: "portfolio-36893",
  storageBucket: "portfolio-36893.appspot.com",
  messagingSenderId: "148747552479",
  appId: "1:148747552479:web:b62731365e49afd7fa0b6a",
  measurementId: "G-VFR6TYMCL7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
