import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyAIrlkmtAAHag-3LFOYRNsjJKFUTlcAfMg",
  authDomain: "movie-website-926db.firebaseapp.com",
  projectId: "movie-website-926db",
  storageBucket: "movie-website-926db.appspot.com",
  messagingSenderId: "475854504251",
  appId: "1:475854504251:web:33d81da911215605e3771e",
  measurementId: "G-KRVZ4FN6W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);