import { useEffect, useState, useContext } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

import { Context } from '../../provider/Context';
import { updateData } from '../../utils/updateData';
import { randomData } from '../../utils/randomData';
import Item from '../Item/Item';
import Banner from '../Banner/Banner';

import './Card.css';

const Card = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState<DocumentData | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { editMode, setBannerVisible, setEditMode, setStatus } =
    useContext(Context);

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
  const handleTextupdate = () => {
    if (data) {
      const name = showAnswer ? 'answer' : 'question';

      updateData(data.id, { [name]: data[name] }, setBannerVisible, setStatus);
      setEditMode(!editMode);
    }
  };

  if (isLoading)
    return (
      <main className="container-loading">
        <div className="loading" />
      </main>
    );

  return (
    <main
      className="container-items"
      onClick={() => !editMode && handleClick()}
    >
      <Banner />
      <Item
        name={showAnswer ? 'back' : 'front'}
        handleClick={
          !editMode ? (showAnswer ? askNewData : handleClick) : undefined
        }
        edit={editMode}
        handleTextupdate={handleTextupdate}
        setData={setData}
        setEditMode={setEditMode}
        showAnswer={showAnswer}
        data={data}
      />
    </main>
  );
};

export default Card;
