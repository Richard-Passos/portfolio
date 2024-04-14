'use client';

import { Slot } from '@radix-ui/react-slot';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useEventListener } from '@/hooks';
import { setHeaderHeight } from '@/redux';
import { cn } from '@/utils';

const HeaderState = ({ className, ...props }) => {
  const { theme } = useSelector((data) => data.header),
    ref = useRef(null),
    dispatch = useDispatch();

  const handleSetHeight = useCallback(() => {
    const { height } = ref.current.getBoundingClientRect();

    dispatch(setHeaderHeight(height));
  }, [ref, dispatch]);

  useEventListener('resize', handleSetHeight);

  useEffect(() => {
    handleSetHeight();
  }, [handleSetHeight]);

  return (
    <Slot
      ref={ref}
      className={cn(`theme-${theme}`, className)}
      {...props}
    />
  );
};

export default HeaderState;
