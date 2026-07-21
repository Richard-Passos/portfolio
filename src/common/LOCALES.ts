export const LOCALES = {
  pt: 'Português'
} as const;

export type Locale = keyof typeof LOCALES;
export type LocaleLabel = (typeof LOCALES)[Locale];

export const DEFAULT_LOCALE = {
  key: 'pt',
  label: LOCALES.pt
} as const satisfies {
  key: Locale;
  label: LocaleLabel;
};
