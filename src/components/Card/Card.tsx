import { useEffect, useState, useContext } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

import { Context } from '../../provider/Context';
import { randomData } from '../../utils/randomData';
import Item from '../Item/Item';

import './Card.css';

const Card = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState<DocumentData | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { editMode, setEditMode } = useContext(Context);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);

    randomData()
      .then((cardData) => {
        setIsLoading(false);
        setShowAnswer(false);
        setData(cardData);
      })
      .catch((error) => {
        console.error('Error obtaining random data:', error);
      });
  };

  const askNewData = () => fetchData();
  const handleClick = () => setShowAnswer(!showAnswer);

  if (isLoading)
    return (
      <main className="container-loading">
        <div className="loading" />
      </main>
    );
  console.log(data);
  return (
    <main
      className="container-items"
      onClick={() => !editMode && handleClick()}
    >
      <Item
        name={showAnswer ? 'back' : 'front'}
        handleClick={
          !editMode ? (showAnswer ? askNewData : handleClick) : undefined
        }
        edit={editMode}
        text={showAnswer ? data?.answer : data?.question}
        setData={setData}
        showAnswer={showAnswer}
        data={data}
      />
    </main>
  );
};

export default Card;
