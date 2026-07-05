import Marquee, { MarqueeProps } from 'react-fast-marquee';

import { MergeProps } from '@/types';

type MarqueeRootProps = MergeProps<{ direction?: 'ltr' | 'rtl' }, MarqueeProps>;

const MarqueeRoot = ({ direction = 'ltr', ...props }: MarqueeRootProps) => {
  return (
    <Marquee
      direction={direction == 'ltr' ? 'right' : 'left'}
      autoFill
      {...props}
    />
  );
};

export { MarqueeRoot };
export type { MarqueeRootProps };
