'use client';

import { Slot } from '@radix-ui/react-slot';
import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useUpdateMotionValueEvent, useWindowSize } from '@/hooks';
import { setHeaderTheme } from '@/redux';

const HeaderChangeTheme = ({ theme, force, ...props }) => {
  const { height, theme: activeTheme } = useSelector((data) => data.header),
    windowSize = useWindowSize(),
    dispatch = useDispatch(),
    ref = useRef(null);

  const limitY = windowSize.height / (height * 100);

  const { scrollYProgress: y1 } = useScroll({
      target: ref,
      offset: [`0 ${limitY + 0.001}`, `0 ${limitY}`],
    }),
    { scrollYProgress: y2 } = useScroll({
      target: ref,
      offset: [`1 ${limitY - 0.001}`, `1 ${limitY}`],
    });

  const handleSetTheme = useCallback(() => {
    if (activeTheme !== theme) dispatch(setHeaderTheme(theme));
  }, [activeTheme, theme, dispatch]);

  const onChange = (y) => {
    if (y === 1) handleSetTheme();
  };

  useUpdateMotionValueEvent(y1, 'change', onChange, 0);
  useUpdateMotionValueEvent(y2, 'change', onChange, 0);

  useEffect(() => {
    if (force) handleSetTheme();
  }, [force]);

  return (
    <Slot
      ref={ref}
      {...props}
    />
  );
};

export default HeaderChangeTheme;
