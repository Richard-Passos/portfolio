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

import { cn, setRefs } from '@/utils';

import { scrollSmoothConfig } from '../smooth-scroll';

const HorizontalScroll = (
  { className, children, baseVelocity = 100, ...props },
  ref,
) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, scrollSmoothConfig);
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
      className={cn('w-full overflow-x-clip', className)}
      ref={setRefs(ref, containerRef)}
      {...props}
    >
      <motion.div
        className='flex items-center'
        style={{
          x: baseX,
        }}
      >
        <HorizontalScrollChildren ref={childrenRef}>
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
      className={cn('shrink-0', className)}
      ref={ref}
      {...props}
    />
  );
});
HorizontalScrollChildren.displayName = 'HorizontalScrollChildren';

export default forwardRef(HorizontalScroll);
