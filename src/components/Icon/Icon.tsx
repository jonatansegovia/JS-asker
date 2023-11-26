import { useContext, MouseEvent } from 'react';

import { Context } from '../../provider/Context';

import './Icon.styled.css';

interface IconProps {
  iconName?: string;
}

const Icon = ({ iconName }: IconProps) => {
  const { setEditMode, editMode } = useContext(Context);

  const isSave = iconName === 'save';
  const isEdit = iconName === 'edit_square';

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();

    if (isEdit || isSave) {
      setEditMode(!editMode);

      if (isSave) {
        console.log('saved');
      }
    }
  };

  return (
    <span
      className={`material-symbols-outlined ${isSave ? 'save' : ''}`}
      onClick={handleClick}
    >
      {iconName}
    </span>
  );
};

export default Icon;
