'use client';

import { Slot } from '@radix-ui/react-slot';
import { useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { forwardRef, useEffect, useRef } from 'react';

import { cn, setRefs } from '@/utils';

const Section = (
  { isInViewAmount = 0.51, theme, asChild, className, ...props },
  ref,
) => {
  const innerRef = useRef(null),
    { setTheme } = useTheme();

  const isInView = useInView(innerRef, { amount: isInViewAmount });

  useEffect(() => {
    if (isInView && theme) setTheme(theme);
  }, [isInView, theme, setTheme]);

  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={cn('max-2xl:min-h-screen 2xl:max-h-bounds', className)}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(Section);
