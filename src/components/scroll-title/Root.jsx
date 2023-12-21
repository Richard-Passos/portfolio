'use client';

import { Fragment, useRef } from 'react';

import { useGetNumberOfSiblings } from '@/hooks';
import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../scroll-animation';
import { TextTitle } from '../ui/text';

const ScrollTitle = ({ dir = 'toRight', className, title, ...props }) => {
  const containerRef = useRef(null),
    childrenRef = useRef(null);

  const numberOfSiblings =
    useGetNumberOfSiblings(containerRef, childrenRef, 1.5, true) + 1;

  const directions = {
    toLeft: ['25%', '-25%'],
    toRight: ['-25%', '25%'],
  };

  const animationConfig = {
    prop: 'x',
    propPoints: directions[dir],
  };

  return (
    <TextTitle
      asChild
      className={cn(
        'w-full max-w-bounds overflow-hidden text-[14vw] uppercase leading-none sm:text-[min(10vw,8rem)]',
        className,
      )}
      ref={containerRef}
      {...props}
    >
      <span>
        <ScrollAnimationTransform config={animationConfig}>
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
        </ScrollAnimationTransform>
      </span>
    </TextTitle>
  );
};

const SecondaryTitle = ({ className, ...props }) => {
  return (
    <span
      aria-hidden
      className={cn('outline-text opacity-40 dark:opacity-10', className)}
      {...props}
    />
  );
};

export default ScrollTitle;
