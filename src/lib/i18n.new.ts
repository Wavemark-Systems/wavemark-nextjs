export type Locale = 'lb' | 'en'

// Import all translation files
import commonEn from '@/locales/en/common.json'
import commonLb from '@/locales/lb/common.json'
import homeEn from '@/locales/en/home.json'
import homeLb from '@/locales/lb/home.json'
import authEn from '@/locales/en/auth.json'
import authLb from '@/locales/lb/auth.json'
import errorsEn from '@/locales/en/errors.json'
import errorsLb from '@/locales/lb/errors.json'
import contactEn from '@/locales/en/contact.json'
import contactLb from '@/locales/lb/contact.json'
import pagesEn from '@/locales/en/pages.json'
import pagesLb from '@/locales/lb/pages.json'
import solutionsEn from '@/locales/en/solutions.json'
import solutionsLb from '@/locales/lb/solutions.json'

// Combine all translations for each locale
const translations = {
  en: {
    ...commonEn,
    ...homeEn,
    ...authEn,
    ...errorsEn,
    ...contactEn,
    // Flatten nested structures for easier access
    companyTitle: pagesEn.company.title,
    companySubtitle: pagesEn.company.subtitle,
    companyPageDesc: pagesEn.company.description,
    careersTitle: pagesEn.careers.title,
    careersSubtitle: pagesEn.careers.subtitle,
    careersPageDesc: pagesEn.careers.description,
    // Solutions
    advertisements: solutionsEn.advertisements.title,
    advertisementsDesc: solutionsEn.advertisements.description,
    advertisementsPageDesc: solutionsEn.advertisements.pageDescription,
    accessibility: solutionsEn.accessibility.title,
    accessibilityDesc: solutionsEn.accessibility.description,
    accessibilityPageDesc: solutionsEn.accessibility.pageDescription,
    announcements: solutionsEn.announcements.title,
    announcementsDesc: solutionsEn.announcements.description,
    announcementsPageDesc: solutionsEn.announcements.pageDescription,
    callCenters: solutionsEn.callCenters.title,
    callCentersDesc: solutionsEn.callCenters.description,
    callCentersPageDesc: solutionsEn.callCenters.pageDescription,
  },
  lb: {
    ...commonLb,
    ...homeLb,
    ...authLb,
    ...errorsLb,
    ...contactLb,
    // Flatten nested structures for easier access
    companyTitle: pagesLb.company.title,
    companySubtitle: pagesLb.company.subtitle,
    companyPageDesc: pagesLb.company.description,
    careersTitle: pagesLb.careers.title,
    careersSubtitle: pagesLb.careers.subtitle,
    careersPageDesc: pagesLb.careers.description,
    // Solutions
    advertisements: solutionsLb.advertisements.title,
    advertisementsDesc: solutionsLb.advertisements.description,
    advertisementsPageDesc: solutionsLb.advertisements.pageDescription,
    accessibility: solutionsLb.accessibility.title,
    accessibilityDesc: solutionsLb.accessibility.description,
    accessibilityPageDesc: solutionsLb.accessibility.pageDescription,
    announcements: solutionsLb.announcements.title,
    announcementsDesc: solutionsLb.announcements.description,
    announcementsPageDesc: solutionsLb.announcements.pageDescription,
    callCenters: solutionsLb.callCenters.title,
    callCentersDesc: solutionsLb.callCenters.description,
    callCentersPageDesc: solutionsLb.callCenters.pageDescription,
  }
} as const

export type TranslationKeys = keyof typeof translations.en

export function getTranslations(locale: Locale) {
  return translations[locale]
}

// Helper function to get nested translations
export function getNestedTranslations(locale: Locale) {
  return {
    common: locale === 'en' ? commonEn : commonLb,
    home: locale === 'en' ? homeEn : homeLb,
    auth: locale === 'en' ? authEn : authLb,
    errors: locale === 'en' ? errorsEn : errorsLb,
    contact: locale === 'en' ? contactEn : contactLb,
    pages: locale === 'en' ? pagesEn : pagesLb,
    solutions: locale === 'en' ? solutionsEn : solutionsLb,
  }
}

