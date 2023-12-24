import { ChangeEvent } from 'react';

import './NewItem.css';

interface NewItem {
  name: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  text: string;
  value: string;
}

const NewItem = ({ handleChange, name, text, value }: NewItem) => (
  <>
    <label htmlFor={name}>{text}</label>
    <textarea className={name} onChange={handleChange} value={value}></textarea>
  </>
);

export default NewItem;
