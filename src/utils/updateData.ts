import { doc, updateDoc } from 'firebase/firestore/lite';

import { FirebaseDB } from './getData';

interface UpdateDataParams {
  id: string;
  newData: {
    answer?: string;
    question?: string;
  };
}

export const updateData = ({ id, newData }: UpdateDataParams) => {
  const cardRef = doc(FirebaseDB, 'qaCollection', id);
  console.log(cardRef);
  updateDoc(cardRef, newData).then(() => console.log('DONE'));
};
