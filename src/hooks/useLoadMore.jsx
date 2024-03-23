'use client';

import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';

const useLoadMore = (setState, getFn) => {
  const initialPage = +useSearchParams().get('page') || 1;

  const page = useRef(initialPage),
    isLastPage = useRef(false),
    [isFetching, setIsFetching] = useState(false);

  const loadMore = async () => {
    try {
      setIsFetching(true);

       const res = await getFn(`?page=${page.current + 1}`);

      page.current++;
      isLastPage.current = page.current >= res.meta.totalPages;

      setState((state) => [...state, ...res.data]);
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsFetching(false);
    }
  };

  return { loadMore, isFetching, page, isLastPage };
};

export default useLoadMore;
