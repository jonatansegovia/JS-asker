import { useEffect, useRef, useState } from 'react';

import Icon from '../Icon/Icon';

import './Item.styled.css';

interface Item {
  edit: boolean;
  handleClick?: () => void;
  isBack?: boolean;
  name: string;
  handleEditMode: (mode: boolean) => void;
  text: string;
}
const Item = ({ edit, name, handleClick, handleEditMode, text }: Item) => {
  const [innerText, setInnerText] = useState(text);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (edit && textareaRef.current) {
      const textLength = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(textLength, textLength);
      textareaRef.current.focus();
    }
  }, [edit]);

  return (
    <div className={name} onClick={handleClick}>
      {edit ? (
        <textarea
          className="inner-text"
          disabled={!edit}
          onChange={(e) => setInnerText(e.target.value)}
          onBlur={() => handleEditMode(!edit)}
          ref={textareaRef}
          value={innerText}
        />
      ) : (
        <p
          className="inner-text"
          contentEditable={edit}
          suppressContentEditableWarning
        >
          {innerText}
        </p>
      )}
      <Icon iconName="edit_square" />
    </div>
  );
};

export default Item;
