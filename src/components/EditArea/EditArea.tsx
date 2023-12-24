import { useContext, useEffect, useRef } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

import { Context } from '../../provider/Context';
import { updateData } from '../../utils/updateData';
import Icon from '../Icon/Icon';

import './EditArea.styled.css';

interface EditAreaProps {
  edit: boolean;
  handleData: (text: DocumentData) => void;
  name: string;
  cardData: DocumentData | undefined;
}

const EditArea = ({ edit, handleData, name, cardData = {} }: EditAreaProps) => {
  const { setEditMode, editMode } = useContext(Context);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (edit && textareaRef.current) {
      const textLength = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(textLength, textLength);
      textareaRef.current.focus();
    }
  }, [edit]);

  const handleDBupdate = () => {
    updateData(cardData.id, { [name]: cardData[name] });
    setEditMode(!editMode);
  };

  return (
    <>
      <textarea
        className={`inner-area ${name}`}
        disabled={!edit}
        onChange={(e) => handleData({ ...cardData, [name]: e.target.value })}
        ref={textareaRef}
        value={cardData[name]}
      />
      <Icon handleClick={handleDBupdate} />
    </>
  );
};

export default EditArea;
