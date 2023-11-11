import { useState } from 'react';

import QuestionCard from './components/Card/Card';
import NewCard from './components/NewCard/NewCard';
import './App.css';

function App() {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <button onClick={() => setEditMode(!editMode)}>Create New Card</button>
      {!editMode ? <QuestionCard /> : <NewCard />}
    </>
  );
}

export default App;
