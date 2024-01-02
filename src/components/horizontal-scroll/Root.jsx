'use client';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { forwardRef, useRef } from 'react';

import { useGetNumberOfSiblings } from '@/hooks';
import { cn, setRefs } from '@/utils';

const HorizontalScroll = (
  { className, children, baseVelocity = 100, ...props },
  ref,
) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const containerRef = useRef(null),
    childrenRef = useRef(null);

  const numberOfSiblings = useGetNumberOfSiblings(
    containerRef,
    childrenRef,
    2,
    true,
  );

  const x = useTransform(baseX, (v) => wrap(-50, 0, v) + '%');

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn('w-full overflow-x-clip', className)}
      ref={setRefs(ref, containerRef)}
      {...props}
    >
      <motion.div
        className='flex w-fit gap-[--gap] whitespace-nowrap'
        style={{ x }}
      >
        <HorizontalScrollChildren
          className='first:ml-[--gap]'
          ref={childrenRef}
        >
          {children}
        </HorizontalScrollChildren>

        {[...Array(numberOfSiblings)].map((_, i) => (
          <HorizontalScrollChildren key={i}>
            {children}
          </HorizontalScrollChildren>
        ))}
      </motion.div>
    </div>
  );
};

const HorizontalScrollChildren = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn('flex items-center gap-[--gap]', className)}
      ref={ref}
      {...props}
    />
  );
});
HorizontalScrollChildren.displayName = 'HorizontalScrollChildren';

export default forwardRef(HorizontalScroll);
