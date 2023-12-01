'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/utils';

const TextScrollAnimation = ({ text, className, ...props }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 .95', '0 .25'],
  });

  const words = text.split(' ');

  return (
    <span
      aria-label={text}
      className={cn('flex flex-wrap gap-x-font-blank-space', className)}
      ref={ref}
      {...props}
    >
      {words.map((word, i) => {
        const start = i / words.length,
          end = start + 1 / words.length;

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </span>
  );
};

const Word = ({ progress, range, className, style, ...props }) => {
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

export default TextScrollAnimation;
