'use client';

import { useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useUpdateEffect } from '.';

const useLoadMore = (getFn, setData,  params) => {
  const searchParams = useSearchParams()


  const [state, setState] = useState({
    page: +searchParams.get('page') || 1,
    isLoading: false,
    isLastPage: false,
  });

    const handleFetch = useCallback(async (pathname) => {
      const data = await getFn(pathname);

      return data
    }, [getFn])

  const loadMore = async () => {
    try {
      setState(state => ({ ...state, isLoading: true }));

        const { data = [], meta = {} } = await handleFetch(`?page=${state.page + 1}${params}`)
          
        setData((state) => [...state, ...data]);

      setState(({page, ...state}) => ({
          ...state,
          page: page + 1,
          isLastPage: page + 1 >= meta.totalPages
        })
      )
    } catch (err) {
      throw new Error(err);
    } finally {
        setState(state => ({ ...state, isLoading: false }));
    }
  }

  useUpdateEffect(() => {
    setState({
      page: 1,
      isLoading: false,
      isLastPage: false
    })
  }, [params])

  return { loadMore, ...state };
};

export default useLoadMore;
