
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAvJbf3QF5EQ-LsJV5yYV8RdC8MVReKYAU",
  authDomain: "test-11245.firebaseapp.com",
  projectId: "test-11245",
  storageBucket: "test-11245.appspot.com",
  messagingSenderId: "354789093959",
  appId: "1:354789093959:web:943805617561daf94e3762",
  measurementId: "G-KDT41NKQCM"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);