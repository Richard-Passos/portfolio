'use client';

import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { transformTemplate } from '@/utils';

import ScrollAnimation from './Root';

const ScrollAnimationTranslate = ({ config, className, ...props }) => {
  const ref = useRef(null),
    defaultConfig = {
      useScrollConfig: {
        target: ref,
        offset: ['0 1', '1 0'],
      },
      useScrollRes: 'scrollYProgress',
      prop: 'y',
      scrollPoints: [0, 1],
      propPoints: ['100%', '0%'],
    };

  config = {
    ...defaultConfig,
    ...config,
    useScrollConfig: {
      ...defaultConfig.useScrollConfig,
      ...config?.useScrollConfig,
    },
  };

  return (
    <ScrollAnimation
      className={twMerge('absolute', className)}
      config={config}
      ref={ref}
      transformTemplate={transformTemplate}
      {...props}
    />
  );
};

export default ScrollAnimationTranslate;
