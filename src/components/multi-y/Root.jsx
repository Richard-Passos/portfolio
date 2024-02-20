import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../scroll-animation';

const AMOUNT = 20;

const MultiY = ({ className, children, ...props }) => {
  const animationConfig = {
    prop: '--y',
    propPoints: [-0.25, 1.25],
  };

  return (
    <ScrollAnimationTransform config={animationConfig}>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 flex items-end justify-evenly overflow-hidden [--h:100vh] 2xl:[--h:--max-h]',
          className,
        )}
        {...props}
      >
        {[...Array(AMOUNT)].map((_, i) => (
          <span
            className='relative -translate-y-[(var(--h)*var(--y)*(1_-_var(--idx)*.05))] rotate-[calc(var(--y)*var(--idx)*var(--deg))] scale-[--scale] [--deg:180deg] odd:-z-10 odd:[--deg:-180deg]'
            key={i}
            style={{
              '--idx': Math.floor(Math.random() * AMOUNT - 1) + 1,
              '--scale': Math.max(Math.random() * 3, 0.25).toFixed(1),
            }}
          >
            {children}
          </span>
        ))}
      </div>
    </ScrollAnimationTransform>
  );
};

export default MultiY;
