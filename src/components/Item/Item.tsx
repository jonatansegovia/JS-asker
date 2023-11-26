import { DocumentData } from 'firebase/firestore/lite';

import Icon from '../Icon/Icon';

import './Item.styled.css';

interface Item {
  isBack?: boolean;
  data?: DocumentData | undefined;
  name: 'front' | 'back';
  handleClick?: () => void;
}

const Item = ({ isBack, data, name, handleClick }: Item) => (
  <div className={name} onClick={handleClick}>
    <p className="inner-text">{isBack ? data?.answer : data?.question}</p>
    <Icon iconName="edit_square" />
  </div>
);

export default Item;
