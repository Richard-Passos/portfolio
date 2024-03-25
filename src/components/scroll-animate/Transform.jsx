'use client';

import { forwardRef } from 'react';

import { transformTemplate } from '@/utils';

import ScrollAnimate from './Root';

const ScrollAnimateTransform = (props, ref) => {
  return (
    <ScrollAnimate
      ref={ref}
      transformTemplate={transformTemplate}
      {...props}
    />
  );
};

export default forwardRef(ScrollAnimateTransform);
