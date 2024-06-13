import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIAi6TcfssdfdarHdfDNUHjzfJlf_8-I1-gXNHA",
  authDomain: "talent500-sdfproject.firebaseapp.com",
  databaseURL:
    "https://talent500-project-default-rtfddb.asia-southeast1.firebasedatabase.app",
  projectId: "talent500-prsdfoject",
  storageBucket: "talent500-prfsdoject.appspot.com",
  messagingSenderId: "6341735fds82725",
  appId: "1:634173582725:web:ab91ed3dsf003ae6788a28ec",
};

// Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Create reference to the database
export const dbRef = ref(database, "item");
