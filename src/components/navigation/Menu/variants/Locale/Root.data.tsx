import { LOCALES, DEFAULT_LOCALE } from '@/common/LOCALES';
import { entries } from '@/utils/entries';

export default {
  label: 'Sua localidade',
  default: DEFAULT_LOCALE,
  locales: entries(LOCALES).map(([key, value]) => ({ key, label: value }))
}
