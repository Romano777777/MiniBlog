
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQLKNUkXxqLRwD4Iw50ey9FV-urfi4-i8",
  authDomain: "miniblog-11d59.firebaseapp.com",
  projectId: "miniblog-11d59",
  storageBucket: "miniblog-11d59.appspot.com",
  messagingSenderId: "899665127133",
  appId: "1:899665127133:web:8baf67b91b9a30191c5d34"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }