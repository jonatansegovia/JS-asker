import { DocumentData } from 'firebase/firestore/lite';

interface Item {
  isBack?: boolean;
  data: DocumentData | undefined;
  name: string;
  handleClick?: () => void;
}

const Item = ({ isBack, data, name, handleClick }: Item) => (
  <div className={name} onClick={handleClick}>
    {data && <h1>{isBack ? Object.values(data) : Object.keys(data)}</h1>}
  </div>
);
export default Item;
