import { DocumentData } from 'firebase/firestore/lite';

import EditArea from '../EditArea/EditArea';
import Icon from '../Icon/Icon';
import './Item.styled.css';

interface Item {
  edit: boolean;
  handleClick?: () => void;
  name: string;
  showAnswer: boolean;
  setData: (text: DocumentData) => void;
  text: string;
  data: DocumentData | undefined;
}

const Item = ({
  edit,
  name,
  handleClick,
  setData,
  data,
  showAnswer,
  text,
}: Item) => {
  return (
    <div className={name} onClick={handleClick}>
      {edit ? (
        <EditArea
          name={showAnswer ? 'answer' : 'question'}
          edit={edit}
          handleData={setData}
          cardData={data}
        />
      ) : (
        <p
          className="inner-text"
          contentEditable={edit}
          suppressContentEditableWarning
        >
          {text}
        </p>
      )}
      <Icon iconName={'edit_square'} />
    </div>
  );
};

export default Item;
