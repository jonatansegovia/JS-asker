import { createContext, ReactNode, useState } from 'react';

interface ContextProps {
  isDark: boolean;
  editMode: boolean;
  id: string;
  setTheme: (mode: boolean) => void;
  setEditMode: (mode: boolean) => void;
  setId: (id: string) => void;
}

const initialContextValues: ContextProps = {
  isDark: true,
  editMode: false,
  id: '',
  setTheme: () => {},
  setEditMode: () => {},
  setId: () => {},
};

export const Context = createContext<ContextProps>(initialContextValues);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [isDark, setTheme] = useState(true);
  const [id, setId] = useState('');

  const values: ContextProps = {
    editMode,
    id,
    isDark,
    setEditMode,
    setId,
    setTheme,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
