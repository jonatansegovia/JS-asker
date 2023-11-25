import { useState } from 'react';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import NewCard from './components/NewCard/NewCard';

import './App.css';

function App() {
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => setEditMode(!editMode);

  return (
    <div id="main">
      <Button
        handleClick={handleClick}
        iconName={!editMode ? 'credit_card_gear' : 'keyboard_backspace'}
      />
      {!editMode ? <Card /> : <NewCard />}
    </div>
  );
}

export default App;
