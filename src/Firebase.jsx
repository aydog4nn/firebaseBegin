import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWauIJUdn_pz9ndCEAVfCsmIEVuTzq23o",
  authDomain: "fir-begin-a520e.firebaseapp.com",
  projectId: "fir-begin-a520e",
  storageBucket: "fir-begin-a520e.appspot.com",
  messagingSenderId: "559182208898",
  appId: "1:559182208898:web:de29aaed2b7b678f4c399b",
  measurementId: "G-SDF17GF1KP"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);