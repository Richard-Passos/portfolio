'use client';

import { Slot } from '@radix-ui/react-slot';
import { deviceType } from 'detect-it';
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

const ScrollAnimation = (
  { config = {}, smoothConfig = {}, style, ...props },
  ref,
) => {
  const {
    useScrollConfig,
    useScrollRes,
    prop,
    scrollPoints,
    propPoints,
    useTransformConfig,
  } = config;

  const innerRef = useRef(null);

  const scroll = useScroll({
    target: innerRef,
    ...useScrollConfig,
  });

  const defaultScroll = scroll[useScrollRes],
    smoothScroll = useSpring(defaultScroll, smoothConfig.scroll);

  const propValue = useTransform(
      defaultScroll,
      scrollPoints,
      propPoints,
      useTransformConfig,
    ),
    smoothPropValue = useSpring(propValue, smoothConfig.prop);

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        [prop]: smoothConfig.prop ? smoothPropValue : propValue,
        ...style,
      }}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(ScrollAnimation);
