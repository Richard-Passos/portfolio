'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useScrollerMotion } from 'scroller-motion';

import { useFollowPointer, useSmooth } from '@/hooks';
import { cn, transformTemplate } from '@/utils';

const FollowPointer = ({ id, smoothConfig, className, style, ...props }) => {
  const ref = useRef(null),
    pointerPos = useFollowPointer(ref),
    { showList } = useSelector((data) => data['follow-pointer']);

  const { scrollY } = useScrollerMotion();

  const isShowing = showList.includes(id);

  const scaleX = useSmooth(
      useTransform(() => (isShowing ? style?.scaleX.get() ?? 1 : 0)),
      smoothConfig,
    ),
    scaleY = useSmooth(
      useTransform(() => (isShowing ? style?.scaleY.get() ?? 1 : 0)),
      smoothConfig,
    ),
    x = useSmooth(
      useTransform(() => style?.x.get() ?? pointerPos.x.get()),
      smoothConfig,
    ),
    y = useSmooth(
      useTransform(
        () => (style?.y.get() ?? pointerPos.y.get()) + scrollY.get(),
      ),
      smoothConfig,
    );

  return (
    <MotionChild
      className={cn('pointer-events-none absolute z-[99]', className)}
      ref={ref}
      style={{
        ...style,
        scaleX,
        scaleY,
        x,
        y,
      }}
      transformTemplate={transformTemplate}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default FollowPointer;
