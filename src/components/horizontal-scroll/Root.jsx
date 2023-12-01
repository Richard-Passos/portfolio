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
import { forwardRef, useEffect, useRef, useState } from 'react';

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

  const [numberOfSiblings, setNumberOfSiblings] = useState(0);

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

  useEffect(() => {
    const handleSetNumberOfSiblings = () => {
      if (containerRef.current && childrenRef.current) {
        const containerWidth =
            containerRef.current.getBoundingClientRect().width,
          childrenWidht = childrenRef.current.getBoundingClientRect().width;

        const numberOfChildren = Math.round(
          (containerWidth * 2) / childrenWidht,
        );

        setNumberOfSiblings(
          Math.max(
            numberOfChildren % 2 === 0
              ? numberOfChildren - 1
              : numberOfChildren,
            1,
          ),
        );
      }
    };

    handleSetNumberOfSiblings();

    window.addEventListener('resize', handleSetNumberOfSiblings);

    return () =>
      window.removeEventListener('resize', handleSetNumberOfSiblings);
  }, []);

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

const HorizontalScrollChildren = forwardRef((props, ref) => {
  return (
    <div
      className='flex items-center'
      ref={ref}
      {...props}
    />
  );
});
HorizontalScrollChildren.displayName = 'HorizontalScrollChildren';

export default forwardRef(HorizontalScroll);
