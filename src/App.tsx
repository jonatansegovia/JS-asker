import { useState } from 'react';

import { Provider } from './provider/Context';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import NewCard from './components/NewCard/NewCard';

import './App.css';

function App() {
  const [createMode, setCreateMode] = useState(false);

  const handleClick = () => setCreateMode(!createMode);

  return (
    <Provider>
      <div id="main">
        <Button
          handleClick={handleClick}
          iconName={!createMode ? 'credit_card_gear' : 'keyboard_backspace'}
        />
        {!createMode ? <Card /> : <NewCard />}
      </div>
    </Provider>
  );
}

export default App;
