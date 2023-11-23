'use client';

import { Slot } from '@radix-ui/react-slot';
import { useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { forwardRef, useEffect, useRef } from 'react';

import { setRefs } from '@/utils';

const ChangeTheme = ({ amount = 0.51, theme, ...props }, ref) => {
  const innerRef = useRef(null),
    { setTheme } = useTheme();

  const isInView = useInView(innerRef, { amount });

  useEffect(() => {
    if (isInView && theme) setTheme(theme);
  }, [isInView, theme, setTheme]);

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(ChangeTheme);
