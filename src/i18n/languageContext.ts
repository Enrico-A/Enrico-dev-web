import { createContext } from 'react'
import { translations, type Language } from './translations'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)[Language]
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)
