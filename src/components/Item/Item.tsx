import { DocumentData } from 'firebase/firestore/lite';

import EditArea from '../EditArea/EditArea';
import InnerText from '../InnerText/InnerText';
import './Item.styled.css';

interface ItemProps {
  data: DocumentData | undefined;
  edit: boolean;
  handleClick?: () => void;
  name: string;
  setData: (text: DocumentData) => void;
  setEditMode: (mode: boolean) => void;
  showAnswer: boolean;
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
      <InnerText
        edit={edit}
        data={data}
        setEditMode={setEditMode}
        showAnswer={showAnswer}
      />
    )}
  </div>
);

export default Item;
