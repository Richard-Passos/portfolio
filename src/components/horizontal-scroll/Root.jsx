'use client';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

import { smoothScrollConfig } from '../smooth-scroll';

const HorizontalScroll = ({
  className,
  children,
  direction = 1,
  baseVelocity = 100,
  ...props
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, smoothScrollConfig);
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const containerRef = useRef(null),
    childrenRef = useRef(null);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    const containerWidth = containerRef.current.getBoundingClientRect().width;

    if (
      baseX.get() > 0 &&
      ((baseVelocity > 0 && directionFactor.current === 1) ||
        (baseVelocity < 0 && directionFactor.current === -1))
    ) {
      baseX.set(containerWidth * -1);
    } else if (
      baseX.get() < containerWidth * -1 &&
      ((baseVelocity > 0 && directionFactor.current === -1) ||
        (baseVelocity < 0 && directionFactor.current === 1))
    ) {
      baseX.set(0);
    } else {
      baseX.set(baseX.get() + moveBy);
    }
  });

  const [numberOfSiblings, setNumberOfSiblings] = useState(1);

  useEffect(() => {
    if (containerRef.current && childrenRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width,
        childrenWidht = childrenRef.current.getBoundingClientRect().width;

      setNumberOfSiblings(Math.round((containerWidth * 2) / childrenWidht));
    }
  }, []);

  return (
    <div
      className='w-full overflow-x-clip'
      ref={containerRef}
    >
      <motion.div
        className={cn('flex items-center', className)}
        style={{
          x: baseX,
        }}
        {...props}
      >
        <Children ref={childrenRef}>{children}</Children>

        {[...Array(numberOfSiblings)].map((_, i) => (
          <Children key={`Horizontal scroll sibling ${i}`}>{children}</Children>
        ))}
      </motion.div>
    </div>
  );
};

const Children = forwardRef(function HoriontalScrollChildren(
  { className, ...props },
  ref,
) {
  return (
    <div
      className={cn('shrink-0', className)}
      ref={ref}
      {...props}
    />
  );
});

export default HorizontalScroll;
