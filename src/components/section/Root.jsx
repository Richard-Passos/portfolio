'use client';

import { Slot } from '@radix-ui/react-slot';
import { useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { forwardRef, useEffect, useRef } from 'react';

import { cn, setRefs } from '@/utils';

const Section = ({ theme, asChild, className, ...props }, ref) => {
  const innerRef = useRef(null),
    isInView = useInView(innerRef, { amount: 0.51 }),
    { setTheme } = useTheme();

  useEffect(() => {
    if (isInView && theme) setTheme(theme);
  }, [isInView, theme, setTheme]);

  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={cn('relative h-screen max-h-bounds', className)}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(Section);
