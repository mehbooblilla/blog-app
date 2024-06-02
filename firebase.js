// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzkIlseVcRpiBdMF_NPowHLvudABNWz0o",
  authDomain: "blog-app-4822b.firebaseapp.com",
  projectId: "blog-app-4822b",
  storageBucket: "blog-app-4822b.appspot.com",
  messagingSenderId: "144636119674",
  appId: "1:144636119674:web:97fd54fb1aefdad36609c3",
  measurementId: "G-RK20V0B3ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export { db };