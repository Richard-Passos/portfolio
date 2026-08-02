import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { RocketIcon } from '@/components/system/Icon/Rocket';
import { SmileIcon } from '@/components/system/Icon/Smile';
import { JSX } from 'react';

export const rotateAnimation = {
  from: {
    rotate: 0
  },
  to: {
    rotate: -360 * 2
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export const rotateBothAnimation = {
  from: {
    rotate: 0,
    rotateX: 0
  },
  to: {
    rotate: 360 * 2,
    rotateX: 360
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export default {
  improve: (
    <AnimateOnScroll config={rotateBothAnimation}>
      <RocketIcon />
    </AnimateOnScroll>
  ),
  inspire: (
    <AnimateOnScroll config={rotateAnimation}>
      <GlobeIcon />
    </AnimateOnScroll>
  ),
  repeat: (
    <AnimateOnScroll config={rotateBothAnimation}>
      <SmileIcon />
    </AnimateOnScroll>
  )
} satisfies Record<string, JSX.Element>;
