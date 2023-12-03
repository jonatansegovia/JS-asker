import { DocumentData } from 'firebase/firestore/lite';

import EditArea from '../EditArea/EditArea';
import Icon from '../Icon/Icon';
import './Item.styled.css';

interface ItemProps {
  edit: boolean;
  handleClick?: () => void;
  name: string;
  showAnswer: boolean;
  setData: (text: DocumentData) => void;
  setEditMode: (mode: boolean) => void;
  data: DocumentData | undefined;
}

const Item = ({
  edit,
  name,
  handleClick,
  setData,
  setEditMode,
  data,
  showAnswer,
}: ItemProps) => (
  <div className={name} onClick={handleClick}>
    {edit ? (
      <EditArea
        name={showAnswer ? 'answer' : 'question'}
        edit={edit}
        handleData={setData}
        cardData={data}
      />
    ) : (
      <>
        <p
          className="inner-text"
          contentEditable={edit}
          data-testid="inner-text"
          suppressContentEditableWarning
        >
          {showAnswer ? data?.answer : data?.question}
        </p>
        <Icon iconName={'edit_square'} handleClick={() => setEditMode(!edit)} />
      </>
    )}
  </div>
);

export default Item;
