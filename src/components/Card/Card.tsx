import { useEffect, useState } from 'react';

import { randomData } from '../../utils/data';

import './Card.css';

interface Card {
  questions: string;
  answers: string;
}

const Card = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState<Card>();
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

  if (isLoading) return <div className="loading" />;

  return (
    <main>
      <div className="question-container" onClick={handleClick}>
        {!showAnswer ? (
          <div className="front">
            <h1>{data?.questions}</h1>
          </div>
        ) : (
          <div className="back" onClick={askNewData}>
            <h1>{data?.answers}</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Card;
