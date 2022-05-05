// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRZPpOye-BOd8v56vcqdeMGcz0IwlGMZw",
  authDomain: "bookmark-d-4a140.firebaseapp.com",
  projectId: "bookmark-d-4a140",
  storageBucket: "bookmark-d-4a140.appspot.com",
  messagingSenderId: "411066562515",
  appId: "1:411066562515:web:2b6fcffad0af3092ff2126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export {db};