import { MouseEvent } from 'react';

import './Icon.styled.css';

interface IconProps {
  handleClick: (e: MouseEvent<HTMLSpanElement>) => void;
  iconName?: string;
}

const Icon = ({ handleClick, iconName = 'save' }: IconProps) => {
  return (
    <span
      className={`material-symbols-outlined ${
        iconName === 'save' ? 'save' : ''
      }`}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(e);
      }}
    >
      {iconName}
    </span>
  );
};

export default Icon;
