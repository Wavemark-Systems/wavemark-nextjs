'use client'

import { createContext, useContext } from 'react'
import type { Locale } from '@/lib/i18n'
import { getTranslations } from '@/lib/i18n'

const LocaleContext = createContext<{
  locale: Locale
  t: ReturnType<typeof getTranslations>
}>({
  locale: 'en',
  t: getTranslations('en')
})

export function LocaleProvider({
  children,
  locale
}: {
  children: React.ReactNode
  locale: Locale
}) {
  const t = getTranslations(locale)
  
  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
