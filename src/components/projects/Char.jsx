'use client';

import { useRef } from 'react';

import { useIsInView } from '@/hooks';
import { cn } from '@/utils';

const ProjectsChar = ({
  animationType = 'onView',
  className,
  chars,
  idx,
  children,
  ...props
}) => {
  const ref = useRef(null);

  const isInView = useIsInView(ref);

  const animations = {
    onView:
      'data-[inview=true]:translate-y-0 data-[inview=true]:[transition-delay:--delay]',
    onGroupHover:
      'group-hover:translate-y-0 group-hover:[transition-delay:--delay]',
  };

  return (
    <span
      className={cn('overflow-hidden', className)}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          'translate-y-full transition-transform duration-300',
          animations[animationType],
        )}
        data-inview={isInView}
        ref={ref}
        style={{ '--delay': _getCharDelay(chars, idx) }}
      >
        {children}
      </span>
    </span>
  );
};

const _getCharDelay = (chars, i) => {
  const middleIdx = Math.floor(chars.length / 2);

  let idx =
    chars.length % 2 === 0 && i < middleIdx ? middleIdx - 1 - i : middleIdx - i;
  idx = idx < 0 ? idx * -1 : idx;

  return idx * 0.0375 + 's';
};

export default ProjectsChar;
