import { ChangeEvent } from 'react';

import './NewItem.css';

interface NewItem {
  name: string;
  handleChange: (e: ChangeEvent<HTMLDivElement>) => void;
  text: string;
}

const NewItem = ({ handleChange, name, text }: NewItem) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <div className={name} contentEditable onInput={handleChange}></div>
    </>
  );
};

export default NewItem;
