'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { projectsApi } from '@/api';

import { useUpdateEffect } from '.';

const useSetProjects = (setState) => {
  const searchParams = useSearchParams();

  const page = +searchParams.get('page') || 1,
    role = searchParams.get('role')?.toLowerCase() || 'all';

  const handleSetData = useCallback(async () => {
    const { data } = await projectsApi.get(`?page=${page}&role=${role}`);

    setState((state) => ({ ...state, items: data }));
  }, [setState, page, role]);

  useEffect(() => {
    if (page > 1 || role !== 'all') handleSetData();
  }, []);

  useUpdateEffect(() => {
    handleSetData();
  }, [handleSetData]);
};

export default useSetProjects;
