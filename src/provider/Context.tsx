import { createContext, ReactNode, useState } from 'react';

interface ContextProps {
  darkMode: boolean;
  editMode: boolean;
  id: string;
  setDarkMode: (mode: boolean) => void;
  setEditMode: (mode: boolean) => void;
  setId: (id: string) => void;
}

const initialContextValues: ContextProps = {
  darkMode: false,
  editMode: false,
  id: '',
  setDarkMode: () => {},
  setEditMode: () => {},
  setId: () => {},
};

export const Context = createContext<ContextProps>(initialContextValues);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [id, setId] = useState('');

  const values: ContextProps = {
    darkMode,
    editMode,
    id,
    setDarkMode,
    setEditMode,
    setId,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
