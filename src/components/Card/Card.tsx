import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import Item from '../Item/Item';
import { randomData } from '../../utils/randomData';

import './Card.css';

const Card = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState<DocumentData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);

    randomData()
      .then((cardData) => {
        setData(cardData);
        setIsLoading(false);
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
    <main className="container-items" onClick={handleClick}>
      {!showAnswer ? (
        <Item name="front" data={data} />
      ) : (
        <Item
          name="back"
          data={data}
          handleClick={askNewData}
          isBack={showAnswer}
        />
      )}
    </main>
  );
};

export default Card;
