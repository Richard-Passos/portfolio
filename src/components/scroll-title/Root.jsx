'use client';

import { useRef } from 'react';

import { useChildrenCount } from '@/hooks';
import { cn } from '@/utils';

import { ScrollAnimateTransform } from '../scroll-animate';
import { TextTitle } from '../ui/text';

const ScrollTitle = ({ dir = 'ltr', className, variants, title, ...props }) => {
  const parentRef = useRef(null),
    childrenRef = useRef(null);

  const childrenCount = useChildrenCount( parentRef, childrenRef, 1.5 ) + 1;

  const directions = {
    rtl: ['25%', '-25%'],
    ltr: ['-25%', '25%'],
  };

  const animationConfig = {
    prop: 'x',
    propPoints: directions[dir],
  };

  return (
    <TextTitle
      asChild
      className={cn('w-full overflow-x-clip text-[16vw]/none', className)}
      ref={parentRef}
      variants={{ size: 'lg', ...variants }}
      {...props}
    >
      <span>
        <ScrollAnimateTransform config={animationConfig}>
          <span className='flex w-full justify-center gap-font-blank-space whitespace-nowrap'>
              {[...Array(childrenCount / 2)].map((_, i) => <SecondaryTitle key={`First ${i}`} >
                {title}
              </SecondaryTitle>)}

            <span ref={childrenRef}>{title}</span>

            {[...Array(childrenCount / 2)].map((_, i) => <SecondaryTitle key={`Second ${i}`} >
              {title}
            </SecondaryTitle>)}
          </span>
        </ScrollAnimateTransform>
      </span>
    </TextTitle>
  );
};

const SecondaryTitle = ({ className, ...props }) => {
  return (
    <span
      aria-hidden
      className={cn('outline-text opacity-20 dark:opacity-5', className)}
      {...props}
    />
  );
};

export default ScrollTitle;
