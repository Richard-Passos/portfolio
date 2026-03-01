import { Locale, TemplateType } from '@/types';

import { entries } from './entries';
import { isLocale } from './isLocale';
import { normId } from './normId';
import { isTemplate } from './template';

type ParamMap = {
  number: number;
  id: string;
  bool: boolean;
  locale: Locale;
  page: TemplateType;
};

type ParamType = keyof ParamMap;

const resolveType = (
  type: ParamType,
  value: string
): ParamMap[ParamType] | null => {
  if (type === 'number') {
    const parsed = parseInt(value);
    return Number.isNaN(parsed) ? null : parsed;
  }

  if (type === 'id') {
    return normId(value);
  }

  if (type === 'bool') {
    return value.toLowerCase() === 'true';
  }

  if (type === 'locale') {
    return isLocale(value);
  }

  if (type === 'page') {
    return isTemplate(value);
  }

  return null;
};

const getParams = <
  T extends Record<string, ParamType>,
  K extends { [K in keyof T]?: ParamMap[T[K]] }
>(
  searchParams: URLSearchParams,
  schema: T,
  defaults?: K
) => {
  return entries(schema).reduce((obj, [key, type]) => {
    const value = searchParams.get(key),
      resolved = value ? resolveType(type, value) : null;

    return {
      ...obj,
      [key]: resolved !== null ? resolved : defaults?.[key]
    };
  }, {} as K);
};

export { getParams };
export type { ParamMap, ParamType };
