import { ChangeEvent, useContext, useEffect, useState } from 'react';
import NewItem from '../NewItem/NewItem';

import addData from '../../utils/addData';
import Button from '../Button/Button';
import { Context } from '../../provider/Context';

import Banner from '../Banner/Banner';

import './NewCard.css';

const NewCard = () => {
  const [frontValue, setValueFront] = useState('');
  const [backValue, setValueBack] = useState('');
  const { setBannerVisible, setStatus, status } = useContext(Context);

  useEffect(() => {
    if (status === 'success') {
      setValueBack('');
      setValueFront('');
    }
  }, [status]);

  const handleChangeFront = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValueFront(e.currentTarget.value);
  const handleChangeBack = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValueBack(e.currentTarget.value);

  const handleSubmit = () => {
    if (!frontValue || !backValue) {
      setBannerVisible(true);
      setStatus('warning');
    }

    if (frontValue && backValue && confirm('Are you sure?')) {
      addData({ frontValue, backValue, setBannerVisible, setStatus });
    }
  };

  return (
    <main className="container-newitems">
      <Banner />
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
