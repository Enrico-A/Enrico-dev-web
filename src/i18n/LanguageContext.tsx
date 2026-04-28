import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './languageContext'
import { languages, translations, type Language } from './translations'

const LANGUAGE_STORAGE_KEY = 'enrico-dev-web-language'

function isLanguage(value: string | null): value is Language {
  return languages.includes(value as Language)
}

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'it'
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return isLanguage(storedLanguage) ? storedLanguage : 'it'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.meta.description)
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language, t.meta.description, t.meta.title])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
