import { defaultLocale } from '@/constants/locales';
import * as data from '@/data';
import { Locale } from '@/types';

const getTranslations = (locale: Locale['value'] = defaultLocale.value) =>
  data[locale];

export default getTranslations;
