import { baseUrl } from '@/constants';
import { urlRegex } from '@/constants/regexs';

const isExternalUrl = (url: string) =>
  url.indexOf(':') > -1 &&
  baseUrl.replace(urlRegex, '$2$3$4') !== url.replace(urlRegex, '$2$3$4');

export { isExternalUrl };
