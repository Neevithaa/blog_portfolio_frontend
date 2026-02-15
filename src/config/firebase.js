
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZv5L69Zq8_JGYNDqHTtlzy7SbER25ghs",
  authDomain: "blog-app-2f60f.firebaseapp.com",
  projectId: "blog-app-2f60f",
  storageBucket: "blog-app-2f60f.firebasestorage.app",
  messagingSenderId: "181589186246",
  appId: "1:181589186246:web:533b66b44ddca3e23de9c7",
  measurementId: "G-MYM9X47YQ0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth; 
