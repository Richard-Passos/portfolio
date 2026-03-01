import { DEFAULT_LOCALE } from '@/constants';
import * as data from '@/data';
import { Locale } from '@/types';

const getTranslations = (locale: Locale = DEFAULT_LOCALE.value) => data[locale];

export { getTranslations };
