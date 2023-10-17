// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database'
import { getDatabase, ref, set, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaxmbpuoPMfAHtrU9Xrjr9FE5Cgfrc_H4",
  authDomain: "jarskins-8c3bc.firebaseapp.com",
  databaseURL: "https://jarskins-8c3bc-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "travelplanner-21935",
  storageBucket: "jarskins-8c3bc.appspot.com",
  messagingSenderId: "179015537125",
  appId: "1:179015537125:web:04c90dc096a9425d9c5f0c",
  measurementId: "G-P3NXH13YZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics, getDatabase, ref, set, onValue}