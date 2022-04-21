// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt3fEGrlfmaAhOj-S6KdXX_Cgk23j0U1M",
  authDomain: "shahrear-red-onion.firebaseapp.com",
  projectId: "shahrear-red-onion",
  storageBucket: "shahrear-red-onion.appspot.com",
  messagingSenderId: "724250957177",
  appId: "1:724250957177:web:146ad1e84b602ba7990ba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
