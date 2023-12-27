'use client';

import { useRef, useState } from 'react';

const useLoadMore = (setState, getFn) => {
  const page = useRef(1),
    isLastPage = useRef(false),
    [isFetching, setIsFetching] = useState(false);

  const loadMore = async () => {
    try {
      setIsFetching(true);

      const data = await getFn(`page=${page.current + 1}`);

      page.current++;
      isLastPage.current = page.current >= data.totalPages;

      setState((state) => [...state, ...data.results]);
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsFetching(false);
    }
  };

  return { loadMore, isFetching, page, isLastPage };
};

export default useLoadMore;
