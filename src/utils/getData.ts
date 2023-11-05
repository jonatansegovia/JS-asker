/* export const getData = async () => {
  try {
    const response = await fetch(
      'https://asker-83340-default-rtdb.firebaseio.com/data.json'
    );
    if (!response.ok) {
      throw new Error('Erro when obtaining data');
    }

    const data = await response.json();

    if (!data || typeof data !== 'object') {
      throw new Error('Unexpected format');
    }

    return data;
  } catch (error) {
    console.error('There was an error:', error);
    throw error;
  }
};
 */
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

const FirebaseDB = getFirestore();

export const getData = async () => {
  try {
    const colRef = collection(FirebaseDB, 'data');
    const snapshot = await getDocs(colRef);
    const data = snapshot.docs.map((doc) => doc.data());

    return data;
  } catch (error) {
    console.error('There was an error:', error);

    throw error;
  }
};
