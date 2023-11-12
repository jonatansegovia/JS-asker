import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  isEditing?: boolean;
  message?: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, isEditing, message }) => {
  const innerText = isEditing ? 'Go Back To Learn' : 'Create New Card';

  return <button onClick={handleClick}>{message ? message : innerText}</button>;
};

export default Button;
