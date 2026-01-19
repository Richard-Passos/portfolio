'use client';

import { useScroll } from 'motion/react';
import { ComponentProps, useRef } from 'react';

import { cn, setRefs } from '@/utils';

import TextScrollAnimateWord from './Word';

type TextScrollAnimateMoleculeOwnProps = {
  text: string;
};

type TextScrollAnimateMoleculeProps = TextScrollAnimateMoleculeOwnProps &
  Omit<ComponentProps<'span'>, keyof TextScrollAnimateMoleculeOwnProps>;

const TextScrollAnimateMolecule = ({
  text,
  className,
  ref,
  ...props
}: TextScrollAnimateMoleculeProps) => {
  const innerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
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
        const start = i / words.length,
          end = start + 1 / words.length;

        return (
          <TextScrollAnimateWord
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {w}
            {i !== arr.length - 1 && <>&nbsp;</>}
          </TextScrollAnimateWord>
        );
      })}
    </span>
  );
};

export default TextScrollAnimateMolecule;
export type { TextScrollAnimateMoleculeProps };
