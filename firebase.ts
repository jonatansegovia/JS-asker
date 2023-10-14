import { getDatabase } from 'firebase/database';

export function writeUserData() {
  const db = getDatabase();

  console.log(db);
}
