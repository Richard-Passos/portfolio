'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const ScrollAnimation = ({ config, style, ...props }, ref) => {
  const innerRef = useRef(null);

  const {
    useScrollConfig,
    useScrollRes,
    prop,
    scrollPoints,
    propPoints,
    useTransformConfig,
  } = config;

  const scroll = useScroll({
      target: innerRef,
      ...useScrollConfig,
    }),
    propValue = useTransform(
      scroll[useScrollRes],
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
