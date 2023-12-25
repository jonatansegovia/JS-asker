import { useEffect, useRef } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

import Icon from '../Icon/Icon';

import './EditArea.styled.css';

interface EditAreaProps {
  cardData: DocumentData | undefined;
  edit: boolean;
  handleData: (text: DocumentData) => void;
  handleTextupdate: () => void;
  name: string;
}

const EditArea = ({
  edit,
  handleData,
  name,
  cardData = {},
  handleTextupdate,
}: EditAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (edit && textareaRef.current) {
      const textLength = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(textLength, textLength);
      textareaRef.current.focus();
    }
  }, [edit]);

  return (
    <>
      <textarea
        className={`inner-area ${name}`}
        disabled={!edit}
        onChange={(e) => handleData({ ...cardData, [name]: e.target.value })}
        ref={textareaRef}
        value={cardData[name]}
      />
      <Icon handleClick={handleTextupdate} />
    </>
  );
};

export default EditArea;
