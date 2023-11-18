import { cn } from '@/utils';

import { ScrollAnimation } from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const TextScrollAnimationLine = ({ className, children, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['1.5 1', '3 1'],
    },
    useScrollRes: 'scrollYProgress',
    prop: 'clipPath',
    scrollPoints: [0, 1],
    propPoints: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
  };

  return (
    <span
      aria-hidden
      className={cn('relative', className)}
      {...props}
    >
      <ScrollAnimation
        config={animationConfig}
        smoothConfig={{ scroll: scrollSmoothConfig }}
      >
        <span>{children}</span>
      </ScrollAnimation>

      <span className='pointer-events-none absolute left-0 top-0 opacity-10 dark:opacity-5'>
        {children}
      </span>
    </span>
  );
};

export default TextScrollAnimationLine;
