'use client';

import { motion, useTransform } from 'framer-motion';

import { cn } from '@/utils';

const TextScrollAnimationWord = ({
  progress,
  range,
  className,
  style,
  ...props
}) => {
  const bgSize = useTransform(progress, range, ['0%', '100%']);

  return (
    <motion.span
      aria-hidden
      className={cn(
        'bg-[linear-gradient(hsl(var(--content)),hsl(var(--content)))] bg-no-repeat [--text-opacity:.1] [-webkit-text-fill-color:hsl(var(--content)/var(--text-opacity))] [background-clip:text] [background-size:var(--bg-x-size)_100%] dark:[--text-opacity:0.05]',
        className,
      )}
      style={{
        '--bg-x-size': bgSize,
        ...style,
      }}
      {...props}
    />
  );
};

export default TextScrollAnimationWord;
