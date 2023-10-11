'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, useScroll, useTransform } from 'framer-motion';
import { forwardRef } from 'react';

/* 
config = {
  useScrollConfig: {},
  useScrollRes: 'scrollY' | 'scrollX' | 'scrollYProgress' | 'scrollXProgress',
  prop: 'x' | 'y' | 'left' | 'right' | 'etc...',
  scrollPoints: [],
  propPoints: [],
  useTransformConfig: {}
}
 */

const MotionChild = motion(Slot);

const ScrollAnimation = ({ config, style, ...props }, ref) => {
  const {
    useScrollConfig,
    useScrollRes,
    prop,
    scrollPoints,
    propPoints,
    useTransformConfig,
  } = config;

  const scroll = useScroll(useScrollConfig),
    propValue = useTransform(
      scroll[useScrollRes],
      scrollPoints,
      propPoints,
      useTransformConfig,
    );

  return (
    <MotionChild
      ref={ref}
      style={{ [prop]: propValue, ...style }}
      {...props}
    />
  );
};

export default forwardRef(ScrollAnimation);
