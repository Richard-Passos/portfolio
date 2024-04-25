'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useQueryString = (querys = {}) => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(querys).forEach(([key, value]) => params.set(key, value))

    return params.toString();
  }, [querys, searchParams]);

  return `?${createQueryString()}`;
};

export default useQueryString;
