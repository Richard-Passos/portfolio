const LOCALES = {
  en: 'English',
  pt: 'Português'
} as const;

const DEFAULT_LOCALE = {
  value: 'en',
  label: LOCALES.en
} as const;

export { LOCALES, DEFAULT_LOCALE };
