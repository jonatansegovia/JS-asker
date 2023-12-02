import { useContext, useState } from 'react';

import { Context } from './provider/Context';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import NewCard from './components/NewCard/NewCard';

import './App.css';

function App() {
  const [createMode, setCreateMode] = useState(false);
  const { isDark, setTheme } = useContext(Context);

  const handleClick = () => setCreateMode(!createMode);

  return (
    <div id="main" className={isDark ? 'dark-theme' : undefined}>
      <header className="btn-container">
        <Button
          handleClick={handleClick}
          iconName={!createMode ? 'credit_card_gear' : 'keyboard_backspace'}
        />
        <Button
          handleClick={() => setTheme(!isDark)}
          iconName={isDark ? 'clear_night' : 'wb_sunny'}
        />
      </header>
      {!createMode ? <Card /> : <NewCard />}
    </div>
  );
}

export default App;
