'use client';

import { Fragment, useRef } from 'react';

import { useGetNumberOfSiblings } from '@/hooks';
import { cn } from '@/utils';

import { ScrollAnimateTransform } from '../scroll-animate';
import { TextTitle } from '../ui/text';

const ScrollTitle = ({ dir = 'ltr', className, variants, title, ...props }) => {
  const containerRef = useRef(null),
    childrenRef = useRef(null);

  const numberOfSiblings =
    useGetNumberOfSiblings(containerRef, childrenRef, 'width', 1.5) + 1;

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
      className={cn(
        'w-full max-w-bounds overflow-hidden text-[16vw]/[1] font-bold',
        className,
      )}
      ref={containerRef}
      variants={{ size: 'xl', ...variants }}
      {...props}
    >
      <span>
        <ScrollAnimateTransform config={animationConfig}>
          <span className='flex w-full justify-center gap-font-blank-space whitespace-nowrap'>
            <SecondaryTitle>
              {[...Array(numberOfSiblings / 2)].map((_, i) => (
                <Fragment key={'1-' + i}>{title} </Fragment>
              ))}
            </SecondaryTitle>

            <span ref={childrenRef}>{title}</span>

            <SecondaryTitle>
              {[...Array(numberOfSiblings / 2)].map((_, i) => (
                <Fragment key={'2-' + i}>{title} </Fragment>
              ))}
            </SecondaryTitle>
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
