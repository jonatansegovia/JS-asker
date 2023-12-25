import { createContext, ReactNode, useEffect, useState } from 'react';

interface ContextProps {
  bannerVisible: boolean;
  editMode: boolean;
  id: string;
  isDark: boolean;
  setBannerVisible: (visible: boolean) => void;
  setEditMode: (mode: boolean) => void;
  setId: (id: string) => void;
  setStatus: (status: string) => void;
  setTheme: (mode: boolean) => void;
  status: string;
}

const initialContextValues: ContextProps = {
  bannerVisible: false,
  editMode: false,
  id: '',
  isDark: true,
  setBannerVisible: () => {},
  setEditMode: () => {},
  setId: () => {},
  setTheme: () => {},
  setStatus: () => {},
  status: '',
};

export const Context = createContext<ContextProps>(initialContextValues);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [editMode, setEditMode] = useState(false);
  const [isDark, setTheme] = useState(true);
  const [id, setId] = useState('');
  const [bannerVisible, setBannerVisible] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (bannerVisible) {
      setTimeout(() => setBannerVisible(false), 3000);
    }
  }, [bannerVisible]);
  console.log(bannerVisible, status);
  const values: ContextProps = {
    bannerVisible,
    editMode,
    id,
    isDark,
    setBannerVisible,
    setEditMode,
    setId,
    setStatus,
    setTheme,
    status,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
