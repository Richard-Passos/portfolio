'use client'

import { useEventListener } from '@/hooks';
import { setHeaderHeight } from '@/redux';
import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HeaderState = ({ className, ...props }) => {
  const {theme} = useSelector((data) => data.header),
  ref = useRef(null),
  dispatch = useDispatch()

  const handleSetHeight = useCallback(() => {
    const {height} = ref.current.getBoundingClientRect()

    dispatch(setHeaderHeight(height))
  }, [ref.current, dispatch])

  useEventListener('resize', handleSetHeight)
  
  useEffect(() => {
    handleSetHeight()
  }, [])

  return (
    <Slot
      ref={ref}
      className={cn(theme, className)}
      {...props}
    />
  );
};

export default HeaderState;