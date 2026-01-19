'use client';

import { ComponentProps, useRef } from 'react';

import { ScrollAnimate } from '@/components/atoms';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { useChildrenCount } from '@/hooks';
import { cn, setRefs } from '@/utils';

type ScrollTextMoleculeOwnProps = {
  text: string;
  dir?: 'ltr' | 'rtl';
  config?: ScrollAnimateConfigOptions;
};

type ScrollTextMoleculeProps = ScrollTextMoleculeOwnProps &
  Omit<ComponentProps<'span'>, keyof ScrollTextMoleculeOwnProps>;

const ScrollTextMolecule = ({
  dir = 'rtl',
  config,
  className,
  text,
  ref,
  ...props
}: ScrollTextMoleculeProps) => {
  const parentRef = useRef(null),
    childrenRef = useRef(null);

  const childrenCount = useChildrenCount(parentRef, childrenRef, 1.5) + 1;

  const directions = {
    rtl: ['25%', '-25%'],
    ltr: ['-25%', '25%']
  };

  const animationConfig: ScrollAnimateConfigOptions = {
    prop: 'x',
    propPoints: directions[dir],
    ...config,
    scrollConfig: {
      offset: ['0 1', '0 .3'],
      ...config?.scrollConfig
    }
  };

  return (
    <span
      aria-label={text}
      className={cn('w-full overflow-x-clip', className)}
      ref={setRefs(ref, parentRef)}
      {...props}
    >
      <ScrollAnimate config={animationConfig}>
        <span className='flex w-full justify-center whitespace-nowrap'>
          {Array.from(Array(childrenCount / 2).keys()).map((n) => (
            <em
              className={`opacity-20 dark:opacity-5`}
              key={`First ${n}`}
            >
              {text}&nbsp;
            </em>
          ))}

          <span ref={childrenRef}>{text}</span>

          {Array.from(Array(childrenCount / 2).keys()).map((n) => (
            <em
              className={`opacity-20 dark:opacity-5`}
              key={`Second ${n}`}
            >
              &nbsp;{text}
            </em>
          ))}
        </span>
      </ScrollAnimate>
    </span>
  );
};

export default ScrollTextMolecule;
export type { ScrollTextMoleculeProps };
