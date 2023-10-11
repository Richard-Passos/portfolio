'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { useFollowPointer, useSmooth } from '@/hooks';
import { cn, transformTemplate } from '@/utils';

const MotionChild = motion(Slot);

const FollowPointer = ({ id, className, style, ...props }) => {
  const ref = useRef(null),
    pointerPos = useFollowPointer(ref),
    { showList } = useSelector((data) => data['follow-pointer']);

  const isShowing = showList.includes(id);

  const scaleX = useSmooth(
      useTransform(() => (isShowing ? style?.scaleX.get() ?? 1 : 0)),
    ),
    scaleY = useSmooth(
      useTransform(() => (isShowing ? style?.scaleY.get() ?? 1 : 0)),
    ),
    x = useSmooth(useTransform(() => style?.x.get() ?? pointerPos.x.get())),
    y = useSmooth(useTransform(() => style?.y.get() ?? pointerPos.y.get()));

  return (
    <MotionChild
      className={cn('pointer-events-none fixed left-0 top-0 z-[99]', className)}
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

export default FollowPointer;
