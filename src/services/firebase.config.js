import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChw4AStkjzYGwzKvlpuQSdJcmw00wa8RM",
  authDomain: "tasker-ebde9.firebaseapp.com",
  projectId: "tasker-ebde9",
  storageBucket: "tasker-ebde9.appspot.com",
  messagingSenderId: "389503383235",
  appId: "1:389503383235:web:474258c88948f2fb619476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);