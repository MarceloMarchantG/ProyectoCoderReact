import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ospLdBMeIizR_i0CNn4GkH2fAsIvkK4",
  authDomain: "proyecto-react-coder-559ea.firebaseapp.com",
  projectId: "proyecto-react-coder-559ea",
  storageBucket: "proyecto-react-coder-559ea.appspot.com",
  messagingSenderId: "427064795813",
  appId: "1:427064795813:web:9208b69940d1b2ee43234c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);