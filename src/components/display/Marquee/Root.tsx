import UiMarquee, { MarqueeProps as UiMarqueeProps } from 'react-fast-marquee';

import { MergeProps } from '@/types/MergeProps';

export type MarqueeProps = MergeProps<{ direction?: 'ltr' | 'rtl' }, UiMarqueeProps>;

export const Marquee = ({ direction = 'ltr', ...props }: MarqueeProps) => {
  return (
    <UiMarquee
      autoFill
      direction={direction == 'ltr' ? 'right' : 'left'}
      {...props}
    />
  );
};
