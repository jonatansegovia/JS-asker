import { createContext, ReactNode, useEffect, useState } from 'react';

interface ContextProps {
  isDark: boolean;
  editMode: boolean;
  id: string;
  setBannerVisible: (visible: boolean) => void;
  setTheme: (mode: boolean) => void;
  setEditMode: (mode: boolean) => void;
  setId: (id: string) => void;
  bannerVisible: boolean;
}

const initialContextValues: ContextProps = {
  isDark: true,
  editMode: false,
  id: '',
  setBannerVisible: () => {},
  setTheme: () => {},
  setEditMode: () => {},
  setId: () => {},
  bannerVisible: false,
};

export const Context = createContext<ContextProps>(initialContextValues);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [isDark, setTheme] = useState(true);
  const [id, setId] = useState('');
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    if (bannerVisible) {
      setTimeout(() => setBannerVisible(false), 3000);
    }
  }, [bannerVisible]);

  const values: ContextProps = {
    editMode,
    id,
    isDark,
    setBannerVisible,
    setEditMode,
    setId,
    setTheme,
    bannerVisible,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
