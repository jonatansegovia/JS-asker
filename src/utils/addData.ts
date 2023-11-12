import { addDoc, collection } from 'firebase/firestore/lite';

import { FirebaseDB } from './getData';

interface Data {
  frontValue: string;
  backValue: string;
}

const addData = ({ frontValue, backValue }: Data) => {
  const collectionRef = collection(FirebaseDB, 'data');
  const quiz = { [frontValue]: backValue };

  addDoc(collectionRef, quiz).then((value) => alert(value));
};

export default addData;
