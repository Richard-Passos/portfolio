'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { forwardRef } from 'react';

import { isFunctionThanCall } from '@/utils';

import { Link } from '../ui';

const ScrollToLink = ({ href, ...props }, ref) => {
  const lenis = useLenis();

  return (
    <Link
      ref={ref}
      {...props}
      onClick={(ev) => {
        lenis.scrollTo(href, {
          duration: 2,
          easing: (x) =>
            x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2, // easeInOutQuart
        });

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default forwardRef(ScrollToLink);
