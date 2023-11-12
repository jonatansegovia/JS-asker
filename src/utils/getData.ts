import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore/lite';

export const FirebaseDB = getFirestore();

export const getData = async () => {
  try {
    const collectionRef = collection(FirebaseDB, 'data');

    const snapshot = await getDocs(collectionRef)
      .then((collection) => collection)
      .catch((e) => console.log(e));

    const data: DocumentData[] | undefined = snapshot?.docs.map((doc) =>
      doc.data()
    );

    return data;
  } catch (error) {
    console.error('There was an error:', error);

    throw error;
  }
};
