import { doc, updateDoc } from 'firebase/firestore/lite';

import { FirebaseDB } from './getData';

export const updateData = (
  id: string,
  newData: { [x: string]: string },
  setBannerVisible: (visible: boolean) => void,
  setStatus: (status: 'success' | 'error') => void
) => {
  const cardDBRef = doc(FirebaseDB, 'qaCollection', id);
  updateDoc(cardDBRef, newData)
    .then(() => {
      setBannerVisible(true);
      setStatus('success');
    })
    .catch(() => {
      setBannerVisible(true);
      setStatus('error');
    });
};
