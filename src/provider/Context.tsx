import { createContext, ReactNode, useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

import { getData } from '../utils/getData';

interface ContextProps {
  bannerVisible: boolean;
  cards: DocumentData | undefined;
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
  cards: [],
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
  const [bannerVisible, setBannerVisible] = useState(false);
  const [cards, setCards] = useState<DocumentData | undefined>();
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState('');
  const [isDark, setTheme] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const result = await getData();
      setCards(result);
    } catch (e) {
      setStatus('error');
      setBannerVisible(true);
    }
  };

  const values: ContextProps = {
    bannerVisible,
    cards,
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
