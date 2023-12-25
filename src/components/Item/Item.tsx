import { DocumentData } from 'firebase/firestore/lite';

import EditArea from '../EditArea/EditArea';
import InnerText from '../InnerText/InnerText';

import './Item.styled.css';

interface ItemProps {
  data: DocumentData | undefined;
  edit: boolean;
  handleClick?: () => void;
  handleTextupdate: () => void;
  name: string;
  setData: (text: DocumentData) => void;
  setEditMode: (mode: boolean) => void;
  showAnswer: boolean;
}

const Item = ({
  data,
  edit,
  handleClick,
  handleTextupdate,
  name,
  setData,
  setEditMode,
  showAnswer,
}: ItemProps) => (
  <div className={name} onClick={handleClick}>
    {edit ? (
      <EditArea
        cardData={data}
        edit={edit}
        handleData={setData}
        handleTextupdate={handleTextupdate}
        name={showAnswer ? 'answer' : 'question'}
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
