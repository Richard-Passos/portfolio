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

  const loadMore = () => {
    try {
      setState(state => ({...state, isLoading: true}));

      setState(async ({page, ...state}) => {
        page = page + 1

        const { data = [], meta = {} } = await handleFetch(`?page=${page}${params}`)
  
        setData((state) => [...state, ...data]);

        console.log('-  page >= meta.totalPages   -', page >= meta.totalPages)
        return {
          ...state,
          page,
          isLastPage: page >= meta.totalPages
        }
      })
    } catch (err) {
      throw new Error(err);
    } finally {
      setState(state => ({...state, isLoading: false}));
    }
  }

  useUpdateEffect(() => {
    setState({
      page: 1,
      lsLoading: false,
      isLastPage: false
    })
  }, [params])

  return { loadMore, ...state };
};

export default useLoadMore;
