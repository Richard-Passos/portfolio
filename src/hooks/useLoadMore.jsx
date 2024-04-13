'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { useUpdateEffect } from '.';

const useLoadMore = (getFn, setState, params) => {
  const searchParams = useSearchParams();

  const page = useRef(+searchParams.get('page') || 1)

  const loadMore = useCallback(async () => {
    try {
      setState((state) => ({ ...state, isLoading: true }));

      const { data = [], meta = {} } = await getFn(
        `?page=${page.current + 1}${params}`,
      );

      setState((state) => ({
        ...state,
        items: [...state.items, ...data],
        isLastPage: page.current + 1 >= meta.totalPages,
      }));
    } catch (err) {
      throw new Error(err);
    } finally {
      setState((state) => ({ ...state, isLoading: false }));
    }
  }, [setState, getFn, page, params])

  useUpdateEffect(() => {
    page.current = 1

    setState((state) => ({
      ...state,
      isLastPage: false,
      isLoading: false,
    }));
  }, [setState, params]);

  return loadMore;
};

export default useLoadMore;
