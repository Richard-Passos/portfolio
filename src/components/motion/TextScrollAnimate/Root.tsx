'use client';

import { useScroll } from 'motion/react';
import { ComponentProps, useRef } from 'react';

import { MergeProps } from '@/types';
import { cn, setRefs } from '@/utils';

import { TextScrollAnimateWord } from './Word';

type TextScrollAnimateRootProps = MergeProps<
  {
    text: string;
  },
  ComponentProps<'span'>
>;

const TextScrollAnimateRoot = ({
  text,
  className,
  ref,
  ...props
}: TextScrollAnimateRootProps) => {
  const innerRef = useRef<HTMLElement>(null),
    { scrollYProgress } = useScroll({
      target: innerRef,
      offset: ['0 .75', '1 .75']
    });

  const words = text.split(' ');

  return (
    <span
      aria-label={text}
      className={cn('inline-block', className)}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {words.map((w, i, arr) => {
        const length = Math.max(words.length, 1),
          start = i / length,
          end = start + 1 / length;

        return (
          <TextScrollAnimateWord
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {w}
            {i !== arr.length - 1 && <>&nbsp;</>}
          </TextScrollAnimateWord>
        );
      })}
    </span>
  );
};

export { TextScrollAnimateRoot };
export type { TextScrollAnimateRootProps };
