import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCLzjNAykJfVZ8Zx_L6tkyB9VUDrl7EdGw',
  authDomain: 'asker-83340.firebaseapp.com',
  databaseURL: 'https://asker-83340-default-rtdb.firebaseio.com',
  projectId: 'asker-83340',
  storageBucket: 'asker-83340.appspot.com',
  messagingSenderId: '299515001807',
  appId: '1:299515001807:web:f893d1beeaa3ce1925b0ba',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getFirebase() {
  const test = collection(db, 'data');
  const citySnapshot = await getDocs(test);

  return citySnapshot;
}

export async function addDoc() {
  const result = await setDoc(doc(db, 'data', 'tester'), {
    q2: 'testeando sender',
  });

  return result;
}
