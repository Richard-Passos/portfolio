'use client';

import { Slot } from '@radix-ui/react-slot';
import { useLenis } from '@studio-freight/react-lenis';

import { isFunctionThanCall } from '@/utils';

const BackTop = ({ asChild, ...props }) => {
  const lenis = useLenis();

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      {...props}
      onClick={(ev) => {
        lenis.scrollTo('start', {
          duration: 2,
          easing: (x) =>
            x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2, // easeInOutQuart
        });

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default BackTop;
