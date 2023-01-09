
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL6hiVbQldKpI-rnpy2TcB684w0aIcIIM",
  authDomain: "mini-shop-75fff.firebaseapp.com",
  projectId: "mini-shop-75fff",
  storageBucket: "mini-shop-75fff.appspot.com",
  messagingSenderId: "240536624655",
  appId: "1:240536624655:web:4ebd415a42d384b6d6cd7a",
  measurementId: "G-D2G7BH9G5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;