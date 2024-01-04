import { DocumentData } from 'firebase/firestore/lite';

export const randomData = (cards: DocumentData | undefined) => {
  const numberOfquestions = cards?.length || 0;
  const position = Math.floor(Math.random() * numberOfquestions);

  return cards && cards[position];
};
