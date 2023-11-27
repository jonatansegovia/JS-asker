import { useEffect, useRef } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

import Icon from '../Icon/Icon';

import './EditArea.styled.css';

interface EditAreaProps {
  edit: boolean;
  handleData: (text: DocumentData) => void;
  name: string;
  cardData: DocumentData | undefined;
}

const EditArea = ({ edit, handleData, name, cardData = {} }: EditAreaProps) => {
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
        onChange={(e) => {
          console.log(e.target.value);
          handleData({ ...cardData, [name]: e.target.value });
        }}
        ref={textareaRef}
        value={cardData[name]}
      />
      <Icon iconName={'save'} />
    </>
  );
};

export default EditArea;
