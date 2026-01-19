'use client';

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  useVelocity,
  wrap
} from 'motion/react';
import { ComponentProps, useRef } from 'react';

import { useChildrenCount } from '@/hooks';
import { cn, setRefs, times } from '@/utils';

type HorizontalScrollAtomOwnProps = {
  baseVelocity?: number;
};

type HorizontalScrollAtomProps = HorizontalScrollAtomOwnProps &
  Omit<ComponentProps<'div'>, keyof HorizontalScrollAtomOwnProps>;

const HorizontalScrollAtom = ({
  className,
  children,
  baseVelocity = 1,
  ref,
  ...props
}: HorizontalScrollAtomProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const parentRef = useRef<HTMLDivElement>(null),
    childrenRef = useRef<HTMLDivElement>(null);

  const childrenCount = useChildrenCount(parentRef, childrenRef);

  const x = useTransform(baseX, (v) => wrap(-50, 0, v));

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
      ref={setRefs(ref, parentRef)}
      {...props}
    >
      <motion.div
        className={`flex w-fit translate-x-[calc(var(--x)*1%)] gap-(--gap) whitespace-nowrap`}
        style={{ '--x': x } as ComponentProps<typeof motion.div>['style']}
      >
        <div
          className={`flex items-center gap-(--gap) first:ml-(--gap)`}
          ref={childrenRef}
        >
          {children}
        </div>

        {times(childrenCount, String).map((id) => (
          <div
            className='flex items-center gap-(--gap)'
            key={id}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollAtom;
export type { HorizontalScrollAtomProps };
