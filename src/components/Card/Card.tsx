import { useEffect, useState, useContext } from 'react';
import { DocumentData } from 'firebase/firestore';

import { Context } from '../../provider/Context';
import Item from '../Item/Item';
import { randomData } from '../../utils/randomData';

import './Card.css';

const Card = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState(false);
  const { editMode, setEditMode } = useContext(Context);

  const text = showAnswer ? data?.answer : data?.question;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);

    randomData()
      .then((cardData) => {
        setData(cardData);
        setIsLoading(false);
        setShowAnswer(false);
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

  return (
    <main className="container-items">
      {!showAnswer ? (
        <Item
          name="front"
          handleClick={!editMode ? handleClick : undefined}
          edit={editMode}
          text={text}
        />
      ) : (
        <Item
          name="back"
          handleClick={!editMode ? askNewData : undefined}
          isBack={showAnswer}
          edit={editMode}
          text={text}
        />
      )}
    </main>
  );
};

export default Card;
