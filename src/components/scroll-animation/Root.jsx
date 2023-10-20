'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import { setRefs } from '@/utils';

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

const ScrollAnimation = ({ config, smoothConfig, style, ...props }, ref) => {
  const {
    useScrollConfig,
    useScrollRes,
    prop,
    scrollPoints,
    propPoints,
    useTransformConfig,
  } = config;

  const innerRef = useRef(null),
    scroll = useScroll({
      target: innerRef,
      ...useScrollConfig,
    });

  const defaultScroll = scroll[useScrollRes],
    smoothScroll = useSpring(defaultScroll, smoothConfig);

  const propValue = useTransform(
    smoothConfig ? smoothScroll : defaultScroll,
    scrollPoints,
    propPoints,
    useTransformConfig,
  );

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{ [prop]: propValue, ...style }}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(ScrollAnimation);
