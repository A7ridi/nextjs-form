// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDg57KYSZ9GrOpy3vopz2UumsdUjDf30xc",
	authDomain: "next-firebase-form.firebaseapp.com",
	projectId: "next-firebase-form",
	storageBucket: "next-firebase-form.appspot.com",
	messagingSenderId: "677781678564",
	appId: "1:677781678564:web:aa825a4ba18771ae2dfff1",
	measurementId: "G-1LN5SQCDJ7",
};

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
