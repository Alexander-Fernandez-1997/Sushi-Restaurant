// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCreQ56xFa4VC5ir8_yw02ntEiQDim8KaM",
  authDomain: "react-sushi-bar-portfolio.firebaseapp.com",
  projectId: "react-sushi-bar-portfolio",
  storageBucket: "react-sushi-bar-portfolio.appspot.com",
  messagingSenderId: "621722858879",
  appId: "1:621722858879:web:2329350c20dbc28852164a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
