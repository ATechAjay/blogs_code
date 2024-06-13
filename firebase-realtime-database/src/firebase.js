// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIAi6TcarHdfDNUHjzfJlf_8-I1-gXNHA",
  authDomain: "talent500-project.firebaseapp.com",
  databaseURL:
    "https://talent500-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "talent500-project",
  storageBucket: "talent500-project.appspot.com",
  messagingSenderId: "634173582725",
  appId: "1:634173582725:web:ab91ed3f003ae6788a28ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { app, database };
