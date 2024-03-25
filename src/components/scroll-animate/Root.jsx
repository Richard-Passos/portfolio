'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import { setRefs } from '@/utils';

/* 
config = {
  scrollConfig: {},
  scroll: 'scrollY' | 'scrollX' | 'scrollYProgress' | 'scrollXProgress',
  scrollPoints: [],
  prop: 'x' | 'y' | 'left' | 'right' | 'etc...',
  propPoints: [],
  transformConfig: {}
}
 */

const ScrollAnimate = ({ config = {}, smoothConfig, style, ...props }, ref) => {
  const innerRef = useRef(null);

  const defaultConfig = {
    scrollConfig: {
      target: innerRef,
      offset: ['0 1', '1 0'],
    },
    scroll: 'scrollYProgress',
    scrollPoints: [0, 1],
  };

  config = {
    ...defaultConfig,
    ...config,
    scrollConfig: {
      ...defaultConfig.scrollConfig,
      ...config.scrollConfig,
    },
  };

  const scroll = useScroll(config.scrollConfig);

  const prop = useTransform(
      scroll[config.scroll],
      config.scrollPoints,
      config.propPoints,
      config.transformConfig,
    ),
    smoothProp = useSpring(prop, smoothConfig);

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        [config.prop]: smoothConfig ? smoothProp : prop,
        ...style,
      }}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(ScrollAnimate);
