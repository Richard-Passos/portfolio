'use client';

import { useRef } from 'react';
import Marquee, { MarqueeProps } from 'react-fast-marquee';

import { useChildrenCount } from '@/hooks';
import { setRefs, times } from '@/utils';

type MarqueeAtomOwnProps = {};

type MarqueeAtomProps = MarqueeAtomOwnProps &
  Omit<MarqueeProps, keyof MarqueeAtomOwnProps>;

const MarqueeAtom = ({ children, ref, ...props }: MarqueeAtomProps) => {
  const parentRef = useRef<HTMLDivElement>(null),
    childrenRef = useRef<HTMLUListElement>(null);

  const childrenCount = useChildrenCount(parentRef, childrenRef);

  return (
    <Marquee
      direction='right'
      ref={setRefs(ref, parentRef)}
      {...props}
    >
      <ul
        className={`m-0 flex list-none items-center p-0 *:mx-[calc(var(--gap)/2)]`}
        ref={childrenRef}
      >
        {children}
      </ul>

      {times(childrenCount, String).map((id) => (
        <ul
          aria-hidden
          className={`m-0 flex list-none items-center p-0 *:mx-[calc(var(--gap)/2)]`}
          key={id}
        >
          {children}
        </ul>
      ))}
    </Marquee>
  );
};

export default MarqueeAtom;
export type { MarqueeAtomProps };
