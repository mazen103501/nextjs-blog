// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBj7dD8dhkul403Ykk3CxFoDVTJsFU4RCY",
	authDomain: "next-blog-da58f.firebaseapp.com",
	databaseURL: "https://next-blog-da58f-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "next-blog-da58f",
	storageBucket: "next-blog-da58f.appspot.com",
	messagingSenderId: "268208426464",
	appId: "1:268208426464:web:31ec0968dcafd56e132f85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app)

export { db }

export default app
