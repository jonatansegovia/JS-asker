import { ChangeEvent, useState } from 'react';
import NewItem from '../NewItem/NewItem';

import addData from '../../utils/addData';
import Button from '../Button/Button';

import './NewCard.css';

const NewCard = () => {
  const [frontValue, setValueFront] = useState('');
  const [backValue, setValueBack] = useState('');

  const handleChangeFront = (e: ChangeEvent<HTMLDivElement>) =>
    setValueFront(e.currentTarget.textContent || '');

  const handleChangeBack = (e: ChangeEvent<HTMLDivElement>) =>
    setValueBack(e.currentTarget.textContent || '');

  const handleSubmit = () => {
    if (!frontValue || !backValue)
      return alert('You should add values in both cards!');

    confirm('Are you sure?') &&
      frontValue &&
      backValue &&
      addData({ frontValue, backValue });
  };

  return (
    <main className="container-newitems">
      <NewItem handleChange={handleChangeFront} name="front-new" text="Front" />
      <NewItem handleChange={handleChangeBack} name="back-new" text="Back" />
      <Button handleClick={handleSubmit} message="Submit" />
    </main>
  );
};

export default NewCard;
