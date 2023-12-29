import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore/lite';

export const FirebaseDB = getFirestore();

export const getData = async () => {
  try {
    const collectionRef = collection(FirebaseDB, 'qaCollection');

    const snapshot = await getDocs(collectionRef)
      .then((collection) => collection)
      .catch((e) => console.log(e));

    const card: DocumentData[] | undefined = snapshot?.docs.map((doc) => {
      const qa = doc.data();
      const card = { ...qa, id: doc.id };

      return card;
    });

    return card;
  } catch (error) {
    console.error('Error:', error);

    throw error;
  }
};
