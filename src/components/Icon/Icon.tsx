import { useContext, MouseEvent } from 'react';

import { Context } from '../../provider/Context';

import './Icon.styled.css';

interface IconProps {
  iconName?: string;
}

const Icon = ({ iconName }: IconProps) => {
  const { setEditMode, editMode } = useContext(Context);

  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (iconName !== 'edit_square') return;

    e.stopPropagation();
    setEditMode(!editMode);
  };

  return (
    <span className="material-symbols-outlined" onClick={(e) => handleClick(e)}>
      {iconName}
    </span>
  );
};

export default Icon;
