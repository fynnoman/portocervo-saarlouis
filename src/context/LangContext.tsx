'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lang } from '@/lib/translations';

const LS_KEY = 'portocervo_lang';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: 'de', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('de');

  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY) as Lang | null;
    if (saved && ['de', 'en', 'fr'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(LS_KEY, l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
