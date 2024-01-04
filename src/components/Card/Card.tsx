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
  const [card, setCard] = useState<DocumentData | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const { cards, editMode, setBannerVisible, setEditMode, setStatus, status } =
    useContext(Context);

  useEffect(() => {
    askNewData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  useEffect(() => {
    setIsLoading(false);
  }, [card]);

  const askNewData = () => {
    const card = randomData(cards);

    setCard(card);
  };

  const handleClick = () => setShowAnswer(!showAnswer);

  const handleTextupdate = () => {
    if (card) {
      const name = showAnswer ? 'answer' : 'question';

      updateData(card.id, { [name]: card[name] }, setBannerVisible, setStatus);
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
      <>
        <Banner />
        {card ? (
          <Item
            name={showAnswer ? 'back' : 'front'}
            handleClick={
              !editMode ? (showAnswer ? askNewData : handleClick) : undefined
            }
            edit={editMode}
            handleTextupdate={handleTextupdate}
            setData={setCard}
            setEditMode={setEditMode}
            showAnswer={showAnswer}
            data={card}
          />
        ) : (
          !card &&
          status === 'error' && (
            <div style={{ color: 'wheat' }}>
              NOTHING TO SHOW FOR THE MOMENT...
            </div>
          )
        )}
      </>
    </main>
  );
};

export default Card;
