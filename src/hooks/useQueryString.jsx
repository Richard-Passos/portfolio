'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useQueryString = (querys = []) => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    querys.forEach(([name, value]) => params.set(name, value));

    return params.toString();
  }, [querys, searchParams]);

  return `?${createQueryString()}`;
};

export default useQueryString;
