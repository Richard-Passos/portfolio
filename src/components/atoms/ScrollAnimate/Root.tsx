'use client';

import { Slot } from '@radix-ui/react-slot';
import {
  MotionStyle,
  SpringOptions,
  UseScrollOptions,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'motion/react';
import { ComponentProps, useRef } from 'react';

import { setRefs, transformTemplate } from '@/utils';

const MAPED_TRANSFORM = {
  x: '--anim-x',
  y: '--anim-y',
  rotate: '--anim-rotate',
  rotateX: '--anim-rotate-x',
  rotateY: '--anim-rotate-y',
  scale: '--anim-scale',
  scaleX: '--anim-scale-x',
  scaleY: '--anim-scale-y'
};

type ScrollAnimateConfigOptions = {
  scrollConfig?: UseScrollOptions;
  scroll?: keyof ReturnType<typeof useScroll>;
  scrollPoints?: any[];
  prop: keyof MotionStyle | `--${string}`;
  propPoints: any[];
  transformConfig?: {};
};

type ScrollAnimateAtomOwnProps = {
  config: ScrollAnimateConfigOptions;
  smoothConfig?: SpringOptions;
};

type ScrollAnimateAtomProps = ScrollAnimateAtomOwnProps &
  Omit<ComponentProps<typeof MotionChild>, keyof ScrollAnimateAtomOwnProps>;

const ScrollAnimateAtom = ({
  config,
  smoothConfig,
  style,
  ref,
  ...props
}: ScrollAnimateAtomProps) => {
  const innerRef = useRef<HTMLElement>(null);

  const options: Pick<
    ScrollAnimateConfigOptions,
    'transformConfig' | 'scrollConfig'
  > &
    Required<
      Omit<ScrollAnimateConfigOptions, 'transformConfig' | 'scrollConfig'>
    > = {
    scroll: 'scrollYProgress',
    scrollPoints: [0, 1],
    ...config,
    scrollConfig: {
      offset: ['0 1', '1 0'],
      ...config.scrollConfig
    }
  };

  const scroll = useScroll({ target: innerRef, ...options.scrollConfig });

  const prop = useTransform(
      scroll[options.scroll],
      options.scrollPoints,
      options.propPoints,
      options.transformConfig
    ),
    smoothProp = useSpring(prop, smoothConfig);

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        [MAPED_TRANSFORM[options.prop as keyof typeof MAPED_TRANSFORM] ??
        options.prop]: smoothConfig ? smoothProp : prop,
        ...style
      }}
      transformTemplate={transformTemplate}
      {...props}
    />
  );
};

const MotionChild = motion.create(Slot);

export default ScrollAnimateAtom;
export type { ScrollAnimateAtomProps, ScrollAnimateConfigOptions };
