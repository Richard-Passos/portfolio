'use client';

import Marquee, { MarqueeProps } from 'react-fast-marquee';

type MarqueeAtomOwnProps = {};

type MarqueeAtomProps = MarqueeAtomOwnProps &
  Omit<MarqueeProps, keyof MarqueeAtomOwnProps>;

const MarqueeAtom = ({ children, ...props }: MarqueeAtomProps) => {
  return (
    <Marquee {...props}>
      <ul className='m-0 flex list-none items-center p-0 *:mx-[calc(var(--gap)/2)]'>
        {children}
      </ul>
    </Marquee>
  );
};

export default MarqueeAtom;
export type { MarqueeAtomProps };
