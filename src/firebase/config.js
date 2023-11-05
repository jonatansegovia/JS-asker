// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
/* import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsgneW7QK9MmMOA7cOB2OcPtQTkNhnUAM',
  authDomain: 'js-asker.firebaseapp.com',
  projectId: 'js-asker',
  storageBucket: 'js-asker.appspot.com',
  messagingSenderId: '426523728796',
  appId: '1:426523728796:web:ef8c5c90555930d72f8659',
};

// Initialize Firebaseapp
initializeApp(firebaseConfig); // para inicializar firebase y conectarnos al DB

/*
// init service (we always use this to interact with db)
export const FirebaseDB = getFirestore(); // config de la DB

// collection reference (la colección que consumiremos)
const colRef = collection(FirebaseDB, 'data');

// get collection data
getDocs(colRef).then((snapshot) =>
  snapshot.docs.forEach((doc) => console.log(doc.data()))
);

/* export const FirebaseAuth = getAuth(FirebaseApp); // todas las funcionalidades de autenticación */
