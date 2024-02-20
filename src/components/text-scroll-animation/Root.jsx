'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/utils';

import Word from './Word';

const TextScrollAnimation = ({ text, className, ...props }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 .75', '1 .75'],
  });

  const words = text.split(' ');

  return (
    <span
      aria-label={text}
      className={cn('[--color:--content]', className)}
      ref={ref}
      {...props}
    >
      {words.map((word, i) => {
        const start = i / words.length,
          end = start + 1 / words.length;

        return (
          <>
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>{' '}
          </>
        );
      })}
    </span>
  );
};

export default TextScrollAnimation;
