import { doc, updateDoc } from 'firebase/firestore/lite';

import { FirebaseDB } from './getData';

export const updateData = (id: string, newData: { [x: string]: string }) => {
  const cardDBRef = doc(FirebaseDB, 'qaCollection', id);
  updateDoc(cardDBRef, newData).then(() => console.log('DONE'));
};
