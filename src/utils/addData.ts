import { addDoc, collection } from 'firebase/firestore/lite';

import { FirebaseDB } from './getData';

interface Data {
  frontValue: string;
  backValue: string;
  setBannerVisible: (visible: boolean) => void;
  setStatus: (status: 'success' | 'error') => void;
}

const addData = ({
  frontValue,
  backValue,
  setBannerVisible,
  setStatus,
}: Data) => {
  const collectionRef = collection(FirebaseDB, 'data');
  const quiz = { [frontValue]: backValue };

  addDoc(collectionRef, quiz)
    .then(() => {
      setBannerVisible(true);
      setStatus('success');
    })
    .catch(() => {
      setBannerVisible(true);
      setStatus('error');
    });
};

export default addData;
