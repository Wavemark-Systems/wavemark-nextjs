'use server'

import { headers } from 'next/headers'
import type { Locale } from './i18n'

// Luxembourg country code
const LUXEMBOURG_COUNTRY_CODE = 'LU'

export async function getLocale(): Promise<Locale> {
  const headersList = await headers()
  
  // Try to get country from Cloudflare header (works on Vercel)
  const cfCountry = headersList.get('cf-ipcountry')
  if (cfCountry === LUXEMBOURG_COUNTRY_CODE) {
    return 'lb'
  }
  
  // Try to get country from Vercel geolocation
  const vercelCountry = headersList.get('x-vercel-ip-country')
  if (vercelCountry === LUXEMBOURG_COUNTRY_CODE) {
    return 'lb'
  }
  
  // Fallback: check Accept-Language header for Luxembourgish
  const acceptLanguage = headersList.get('accept-language')
  if (acceptLanguage?.includes('lb')) {
    return 'lb'
  }
  
  // Default to English
  return 'en'
}
