'use client';

import { useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

import { cn } from '@/utils';

const Section = ({ theme, asChild, className, ...props }) => {
  const ref = useRef(null),
    { setTheme } = useTheme(),
    isInView = useInView(ref, { amount: 0.51 });

  useEffect(() => {
    if (isInView && theme) setTheme(theme);
  }, [isInView, theme, setTheme]);

  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={cn('max-h-bounds relative h-screen', className)}
      ref={ref}
      {...props}
    />
  );
};

export default Section;
