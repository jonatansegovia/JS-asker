import { MouseEvent } from 'react';

import { EDIT_PENCIL, SAVE } from '../../utils/variables/general';

import './Icon.styled.css';

interface IconProps {
  handleClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  iconName?: string;
}

const Icon = ({ handleClick, iconName = SAVE }: IconProps) => {
  return (
    <span
      className={`material-symbols-outlined${
        iconName === SAVE ? ` ${SAVE}` : ''
      }`}
      onClick={(e) => {
        (iconName === SAVE || iconName === EDIT_PENCIL) && e.stopPropagation();
        handleClick?.(e);
      }}
    >
      {iconName}
    </span>
  );
};

export default Icon;
