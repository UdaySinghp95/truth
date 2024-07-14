// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE2VUeMl7RffnAjqLphjnX19RSqCVY8pY",
  authDomain: "truther-e1c9a.firebaseapp.com",
  projectId: "truther-e1c9a",
  storageBucket: "truther-e1c9a.appspot.com",
  messagingSenderId: "311160237661",
  appId: "1:311160237661:web:eb8f4f6bd1a2f3d5a1a7b4",
  measurementId: "G-3NLRNTJFYB"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

export default fireApp;