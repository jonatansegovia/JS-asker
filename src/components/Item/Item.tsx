import Icon from '../Icon/Icon';

import './Item.styled.css';

interface Item {
  edit: boolean;
  handleClick?: () => void;
  isBack?: boolean;
  name: string;
  text: string;
}
const Item = ({ text, edit, name, handleClick }: Item) => (
  <div className={name} onClick={handleClick}>
    <p className="inner-text">{text}</p>
    <Icon iconName="edit_square" />
  </div>
);

export default Item;
