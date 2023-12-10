import { DocumentData } from 'firebase/firestore/lite';

import { EDIT_PENCIL } from '../../utils/variables/general';
import Icon from '../Icon/Icon';

interface InnerTextProps {
  edit: boolean;
  data: DocumentData | undefined;
  setEditMode: (mode: boolean) => void;
  showAnswer: boolean;
}

const InnerText = ({ edit, data, setEditMode, showAnswer }: InnerTextProps) => (
  <>
    <p
      className="inner-text"
      contentEditable={edit}
      data-testid="inner-text"
      suppressContentEditableWarning
    >
      {showAnswer ? data?.answer : data?.question}
    </p>
    <Icon iconName={EDIT_PENCIL} handleClick={() => setEditMode(!edit)} />
  </>
);

export default InnerText;
