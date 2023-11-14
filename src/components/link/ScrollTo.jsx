'use client';

import { forwardRef } from 'react';

import { isFunctionThanCall, scrollTo } from '@/utils';

import { Link } from '../ui';

const ScrollToLink = ({ href, ...props }, ref) => {
  return (
    <Link
      href={href}
      ref={ref}
      {...props}
      onClick={(ev) => {
        scrollTo(href.slice(1));

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default forwardRef(ScrollToLink);
