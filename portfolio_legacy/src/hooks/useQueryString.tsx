import { useCallback } from 'react';

import { useSearchParams } from '@/i18n/navigation';
import { normId } from '@/utils';

const useQueryString = (querys: { key: string; value: string }[]) => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    querys.forEach(({ key, value }) => params.set(normId(key), value));

    return params.toString();
  }, [querys, searchParams]);

  return `?${createQueryString()}`;
};

export { useQueryString };
