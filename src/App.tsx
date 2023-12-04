import { useContext, useState } from 'react';

import { Context } from './provider/Context';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import NewCard from './components/NewCard/NewCard';
import {
  DARK_THEME,
  EDIT_GEAR,
  LEFT_ARROW,
  MOON,
  SUN,
} from './utils/variables/general.js';

import './App.css';

function App() {
  const [createMode, setCreateMode] = useState(false);
  const { isDark, setTheme } = useContext(Context);

  const handleClick = () => setCreateMode(!createMode);

  return (
    <div id="main" className={isDark ? DARK_THEME : undefined}>
      <header className="btn-container">
        <Button
          handleClick={handleClick}
          iconName={!createMode ? EDIT_GEAR : LEFT_ARROW}
        />
        <Button
          handleClick={() => setTheme(!isDark)}
          iconName={isDark ? MOON : SUN}
        />
      </header>
      {!createMode ? <Card /> : <NewCard />}
    </div>
  );
}

export default App;
