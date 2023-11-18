import { MouseEventHandler } from 'react';

import './Button.css';

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  isEditing?: boolean;
  message?: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, isEditing, message }) => {
  const innerText = isEditing ? (
    <span className="material-symbols-outlined">keyboard_backspace</span>
  ) : (
    <span className="material-symbols-outlined">credit_card_gear</span>
  );

  return (
    <button className="button" onClick={handleClick}>
      {message ? message : innerText}
    </button>
  );
};

export default Button;
