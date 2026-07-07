export const LOCALES = {
  en: 'English',
  pt: 'Português',
} as const;

export type Locale = keyof typeof LOCALES;
export type LocaleLabel = (typeof LOCALES)[Locale];

export const DEFAULT_LOCALE = {
  key: 'en',
  label: LOCALES.en,
} as const satisfies {
  key: Locale;
  label: LocaleLabel;
};