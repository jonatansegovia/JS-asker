import { MouseEventHandler } from 'react';

import Icon from '../Icon/Icon';

import './Button.css';

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  iconName?: string;
  message?: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, iconName, message }) => (
  <button className={message ? 'msg-button' : 'button'} onClick={handleClick}>
    {message ? message : <Icon iconName={iconName} />}
  </button>
);

export default Button;
