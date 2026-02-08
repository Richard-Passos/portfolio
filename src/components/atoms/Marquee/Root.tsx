import Marquee, { MarqueeProps } from 'react-fast-marquee';

type MarqueeAtomOwnProps = { direction?: 'ltr' | 'rtl' };

type MarqueeAtomProps = MarqueeAtomOwnProps &
  Omit<MarqueeProps, keyof MarqueeAtomOwnProps>;

const MarqueeAtom = ({ direction = 'ltr', ...props }: MarqueeAtomProps) => {
  return (
    <Marquee
      direction={direction == 'ltr' ? 'right' : 'left'}
      autoFill
      {...props}
    />
  );
};

export default MarqueeAtom;
export type { MarqueeAtomProps };
