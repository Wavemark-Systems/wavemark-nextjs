# Localization System

This directory contains all translation files for the Neiom application.

## Structure

Translations are organized by language and namespace:

```
locales/
├── en/                    # English translations
│   ├── common.json       # Common UI elements (buttons, labels, etc.)
│   ├── home.json         # Home page specific translations
│   ├── auth.json         # Authentication related translations
│   ├── errors.json       # Error messages and 404 page
│   ├── contact.json      # Contact page translations
│   ├── pages.json        # Company and Careers pages
│   └── solutions.json    # Solutions pages (ads, accessibility, etc.)
└── lb/                    # Luxembourgish translations
    ├── common.json
    ├── home.json
    ├── auth.json
    ├── errors.json
    ├── contact.json
    ├── pages.json
    └── solutions.json
```

## Adding a New Language

1. Create a new directory under `locales/` with the language code (e.g., `de/` for German)
2. Copy all JSON files from an existing language directory
3. Translate all values in the JSON files
4. Update `src/lib/i18n.ts`:
   - Add the new language code to the `Locale` type
   - Import the new translation files
   - Add the new language to the `translations` object

Example:
```typescript
export type Locale = 'lb' | 'en' | 'de'  // Add 'de'

import commonDe from '@/locales/de/common.json'
// ... import other files

const translations = {
  en: { ... },
  lb: { ... },
  de: {  // Add German translations
    ...commonDe,
    // ... rest of the translations
  }
}
```

## Adding New Translations

### Option 1: Add to existing namespace
If the translation fits into an existing category, add it to the appropriate JSON file:

```json
// locales/en/common.json
{
  "brand": "Neiom",
  "newKey": "New Translation"  // Add here
}
```

### Option 2: Create a new namespace
For a new feature or page:

1. Create new JSON files in each language directory (e.g., `pricing.json`)
2. Add the translations:
```json
// locales/en/pricing.json
{
  "title": "Pricing",
  "subtitle": "Choose your plan"
}
```

3. Import and merge in `src/lib/i18n.ts`:
```typescript
import pricingEn from '@/locales/en/pricing.json'
import pricingLb from '@/locales/lb/pricing.json'

const translations = {
  en: {
    ...commonEn,
    ...pricingEn,  // Add here
    // ...
  },
  lb: {
    ...commonLb,
    ...pricingLb,  // Add here
    // ...
  }
}
```

## Usage in Components

```typescript
import { useLocale } from '@/components/LocaleProvider'

export default function MyComponent() {
  const { t, locale } = useLocale()
  
  return (
    <div>
      <h1>{t.brand}</h1>
      <p>{t.heroDescription}</p>
    </div>
  )
}
```

## Benefits of This Structure

1. **Scalability**: Easy to add new languages and translations
2. **Organization**: Translations grouped by feature/namespace
3. **Type Safety**: TypeScript ensures translation keys exist
4. **Maintainability**: Small, focused JSON files instead of one large file
5. **Collaboration**: Multiple team members can work on different namespaces
6. **Version Control**: Easier to track changes in git diffs

## Best Practices

1. Keep translation keys descriptive and consistent
2. Group related translations in the same namespace
3. Use nested objects in JSON for complex structures
4. Always add translations for all supported languages
5. Test translations in the UI to ensure proper formatting
6. Keep JSON files formatted and properly indented

