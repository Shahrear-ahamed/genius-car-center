import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDRNrI1v4FLPdgkrWeDsX9QaEMo3BgcGVo",
  authDomain: "genius-service-center.firebaseapp.com",
  projectId: "genius-service-center",
  storageBucket: "genius-service-center.appspot.com",
  messagingSenderId: "72326497349",
  appId: "1:72326497349:web:55e353f43acad278d70f2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
