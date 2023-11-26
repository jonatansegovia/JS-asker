import { createContext, ReactNode, useState } from 'react';

interface ContextProps {
  editMode: boolean;
  setEditMode: (mode: boolean) => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const initialContextValues: ContextProps = {
  editMode: false,
  setEditMode: () => {},
  darkMode: false,
  setDarkMode: () => {},
};

export const Context = createContext<ContextProps>(initialContextValues);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const values: ContextProps = { editMode, setEditMode, darkMode, setDarkMode };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
