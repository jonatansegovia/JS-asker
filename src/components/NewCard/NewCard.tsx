import { ChangeEvent, useState } from 'react';
import NewItem from '../NewItem/NewItem';

import addData from '../../utils/addData';
import Button from '../Button/Button';

import './NewCard.css';

const NewCard = () => {
  const [frontValue, setValueFront] = useState('');
  const [backValue, setValueBack] = useState('');

  const handleChangeFront = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValueFront(e.currentTarget.value);
  const handleChangeBack = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValueBack(e.currentTarget.value);
  const handleSubmit = () => {
    if (!frontValue || !backValue) {
      return alert('You should add values in both cards!');
    }

    if (frontValue && backValue && confirm('Are you sure?')) {
      addData({ frontValue, backValue });
      setValueBack('');
      setValueFront('');
    }
  };

  return (
    <main className="container-newitems">
      <NewItem
        handleChange={handleChangeFront}
        name="front-new"
        text="Front"
        value={frontValue}
      />
      <NewItem
        handleChange={handleChangeBack}
        name="back-new"
        text="Back"
        value={backValue}
      />
      <Button handleClick={handleSubmit} message="Submit" />
    </main>
  );
};

export default NewCard;
