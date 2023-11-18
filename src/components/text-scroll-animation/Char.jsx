'use client';

import { cn } from '@/utils';

import Animation from '../animation';

const TextScrollAnimationChar = ({ className, index, children, ...props }) => {
  const variants = [
    {
      opacity: 0,
      x: 60,
      scaleY: 0,
    },
    (i) => ({
      opacity: 1,
      x: 0,
      scaleY: 1,
      transition: {
        delay: 0.0075 * i,
      },
    }),
  ];

  return (
    <Animation.InView
      className={cn('min-w-[--font-blank-space]', className)}
      custom={index}
      variants={variants}
      {...props}
    >
      <span>{children}</span>
    </Animation.InView>
  );
};

export default TextScrollAnimationChar;
