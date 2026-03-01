'use client';

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

import { Slot } from '@/components/misc';
import { MergeProps } from '@/types';
import { setRefs, transformTemplate } from '@/utils';

type ScrollAnimateRootConfigOptions = {
  scrollConfig?: UseScrollOptions;
  scroll?: keyof ReturnType<typeof useScroll>;
  scrollPoints?: any[];
  prop: keyof MotionStyle | `--${string}`;
  propPoints: any[];
  transformConfig?: {};
};

type ScrollAnimateRootProps = MergeProps<
  {
    config: ScrollAnimateRootConfigOptions;
    smoothConfig?: SpringOptions;
  },
  ComponentProps<typeof MotionChild>
>;

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

const MotionChild = motion.create(Slot);

const ScrollAnimateRoot = ({
  config,
  smoothConfig,
  style,
  ref,
  ...props
}: ScrollAnimateRootProps) => {
  const innerRef = useRef<HTMLElement>(null);

  const options: Pick<
    ScrollAnimateRootConfigOptions,
    'transformConfig' | 'scrollConfig'
  > &
    Required<
      Omit<ScrollAnimateRootConfigOptions, 'transformConfig' | 'scrollConfig'>
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

export { ScrollAnimateRoot };
export type { ScrollAnimateRootProps, ScrollAnimateRootConfigOptions };
