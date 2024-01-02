'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { forwardRef } from 'react';

import { isFunctionThanCall } from '@/utils';

import { Link } from '../ui';

const ScrollToLink = ({ href, ...props }, ref) => {
  const lenis = useLenis();

  return (
    <Link
      href={href}
      ref={ref}
      {...props}
      onClick={(ev) => {
        lenis.scrollTo(href);

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default forwardRef(ScrollToLink);
