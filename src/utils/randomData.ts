import { getData } from './getData';

export const randomData = async () => {
  const data = await getData();
  const numberOfquestions = data?.length || 0;
  const position = Math.floor(Math.random() * numberOfquestions);

  return data && data[position];
};
