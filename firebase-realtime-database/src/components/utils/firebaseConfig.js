import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

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

// Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Create reference to the database
export const dbRef = ref(database, "item");
