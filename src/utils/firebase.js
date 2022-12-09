// firebase essentials
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA96wumTv3eFz7PDe1b0lRMCYw6ecx2YwI",
  authDomain: "postsapp1-aae47.firebaseapp.com",
  projectId: "postsapp1-aae47",
  storageBucket: "postsapp1-aae47.appspot.com",
  messagingSenderId: "136265744799",
  appId: "1:136265744799:web:65c9b101f181278482fdaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const mydb = getFirestore(app);
// export const postsRef = collection(mydb, "posts");s
