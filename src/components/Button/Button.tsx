import { MouseEventHandler } from 'react';

import Icon from '../Icon/Icon';

import './Button.css';

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  isEditing?: boolean;
  message?: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, isEditing, message }) => (
  <button className="button" onClick={handleClick}>
    {message ? message : <Icon editing={isEditing} />}
  </button>
);

export default Button;
