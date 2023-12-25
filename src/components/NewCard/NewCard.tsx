import { ChangeEvent, useContext, useEffect, useState } from 'react';
import NewItem from '../NewItem/NewItem';

import addData from '../../utils/addData';
import Button from '../Button/Button';
import { Context } from '../../provider/Context';

import './NewCard.css';
import Banner from '../Banner/Banner';

const NewCard = () => {
  const [frontValue, setValueFront] = useState('');
  const [backValue, setValueBack] = useState('');
  const [status, setStatus] = useState('');
  const { bannerVisible, setBannerVisible } = useContext(Context);

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
      <Banner type={status} visible={bannerVisible} />
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
