import * as constants from '@/constants';
import { locales } from '@/navigation';

import normId from './normId';

const getConstants = (locale) =>
  constants[normId(locale)] || constants[normId(locales[0])] || constants;

export default getConstants;
