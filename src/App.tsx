import { useState } from 'react';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import NewCard from './components/NewCard/NewCard';

import './App.css';

function App() {
  const [createMode, setCreateMode] = useState(false);

  const handleClick = () => setCreateMode(!createMode);

  return (
    <div id="main">
      <Button
        handleClick={handleClick}
        iconName={!createMode ? 'credit_card_gear' : 'keyboard_backspace'}
      />
      {!createMode ? <Card /> : <NewCard />}
    </div>
  );
}

export default App;
