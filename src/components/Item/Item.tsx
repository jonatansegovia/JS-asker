import { DocumentData } from 'firebase/firestore/lite';

import './Item.styled.css';

interface Item {
  isBack?: boolean;
  data: DocumentData | undefined;
  name: 'front' | 'back';
  handleClick?: () => void;
}

const Item = ({ isBack, data, name, handleClick }: Item) => (
  <div className={name} onClick={handleClick}>
    {data && (
      <p className="inner-text">{isBack ? data.answer : data.question}</p>
    )}
    <span className="material-symbols-outlined">edit_square</span>
  </div>
);

export default Item;
